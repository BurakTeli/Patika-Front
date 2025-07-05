// --- To-Do List Application (Modern, Readable, Fully Commented in English) ---

class TodoApp {
    constructor() {
        // Load tasks from localStorage or initialize as an empty array
        this.tasks = JSON.parse(localStorage.getItem('todoTasks')) || [];
        this.currentFilter = 'all';
        this.init();
    }

    // Main initialization method: Bind events, render, update counts
    init() {
        this.bindEvents();
        this.renderTasks();
        this.updateCounts();
    }

    // Event listeners for all main UI interactions
    bindEvents() {
        // Add new task (button and Enter key)
        document.getElementById('addTaskBtn').addEventListener('click', () => this.addTask());
        document.getElementById('taskInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.addTask();
        });

        // Filter buttons (All / Active / Completed)
        document.querySelectorAll('[data-filter]').forEach(btn => {
            btn.addEventListener('click', (e) => this.setFilter(e.target.dataset.filter));
        });

        // Clear all completed tasks
        document.getElementById('clearCompletedBtn').addEventListener('click', () => this.clearCompleted());
    }

    // --- TASK CRUD OPERATIONS ---

    // Add a new task after validation
    addTask() {
        const input = document.getElementById('taskInput');
        const text = input.value.trim();
        const errorMsg = document.getElementById('errorMessage');

        // Input validation: empty or too long
        if (!text) {
            this.showError('Task text cannot be empty!');
            return;
        }
        if (text.length > 100) {
            this.showError('Task text cannot be longer than 100 characters!');
            return;
        }
        // Prevent duplicate tasks
        if (this.tasks.some(task => task.text.toLowerCase() === text.toLowerCase())) {
            this.showError('This task already exists!');
            return;
        }

        // Create new task object
        const task = {
            id: Date.now().toString(),
            text: text,
            completed: false,
            createdAt: new Date().toISOString()
        };

        this.tasks.unshift(task); // Add new tasks to top
        this.saveTasks();
        this.renderTasks();
        this.updateCounts();

        // Clear input & error
        input.value = '';
        errorMsg.classList.remove('show');

        // Success visual feedback
        this.showSuccess();
    }

    // Delete a task by ID (with confirmation)
    deleteTask(id) {
        if (confirm('Are you sure you want to delete this task?')) {
            this.tasks = this.tasks.filter(task => task.id !== id);
            this.saveTasks();
            this.renderTasks();
            this.updateCounts();
        }
    }

    // Toggle task's completed state
    toggleTask(id) {
        const task = this.tasks.find(task => task.id === id);
        if (task) {
            task.completed = !task.completed;
            task.completedAt = task.completed ? new Date().toISOString() : null;
            this.saveTasks();
            this.renderTasks();
            this.updateCounts();
        }
    }

    // Edit a task: Enter/Exit edit mode and save new text
    editTask(id) {
        const taskElement = document.querySelector(`[data-id="${id}"]`);
        const textElement = taskElement.querySelector('.task-text');
        const editBtn = taskElement.querySelector('.edit-btn');
        
        // If already editing, save new value
        if (taskElement.classList.contains('editing')) {
            const input = taskElement.querySelector('.edit-input');
            const newText = input.value.trim();

            // Validation checks
            if (!newText) {
                this.showError('Task text cannot be empty!');
                return;
            }
            if (newText.length > 100) {
                this.showError('Task text cannot be longer than 100 characters!');
                return;
            }
            // Prevent duplicates (except self)
            if (this.tasks.some(task => task.id !== id && task.text.toLowerCase() === newText.toLowerCase())) {
                this.showError('This task already exists!');
                return;
            }
            const task = this.tasks.find(task => task.id === id);
            task.text = newText;
            task.updatedAt = new Date().toISOString();

            this.saveTasks();
            this.renderTasks();
            this.updateCounts();
        } else {
            // Enter edit mode: show input and change icon
            taskElement.classList.add('editing');
            const input = taskElement.querySelector('.edit-input');
            input.value = textElement.textContent;
            input.focus();
            input.select();
            editBtn.innerHTML = '<i class="fas fa-check"></i>';
        }
    }

    // --- FILTERS & CLEAR ---

    // Change active filter (all, active, completed)
    setFilter(filter) {
        this.currentFilter = filter;
        // Update active filter button's style
        document.querySelectorAll('[data-filter]').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-filter="${filter}"]`).classList.add('active');
        this.renderTasks();
    }

    // Remove all completed tasks (with confirmation)
    clearCompleted() {
        const completedCount = this.tasks.filter(task => task.completed).length;
        if (completedCount === 0) {
            alert('There are no completed tasks to clear!');
            return;
        }
        if (confirm(`Are you sure you want to delete ${completedCount} completed task(s)?`)) {
            this.tasks = this.tasks.filter(task => !task.completed);
            this.saveTasks();
            this.renderTasks();
            this.updateCounts();
        }
    }

    // Return tasks matching the current filter
    getFilteredTasks() {
        switch (this.currentFilter) {
            case 'active':
                return this.tasks.filter(task => !task.completed);
            case 'completed':
                return this.tasks.filter(task => task.completed);
            default:
                return this.tasks;
        }
    }

    // --- RENDERING & COUNTS ---

    // Render the tasks list based on the filter
    renderTasks() {
        const taskList = document.getElementById('taskList');
        const emptyMessage = document.getElementById('emptyMessage');
        const filteredTasks = this.getFilteredTasks();

        if (filteredTasks.length === 0) {
            taskList.innerHTML = '';
            emptyMessage.style.display = 'block';
            return;
        }
        emptyMessage.style.display = 'none';

        // Task HTML structure (with escape for XSS)
        taskList.innerHTML = filteredTasks.map(task => `
            <li class="list-group-item task-item ${task.completed ? 'completed' : ''}" data-id="${task.id}">
                <div class="task-content">
                    <div class="task-left">
                        <input type="checkbox" class="form-check-input task-checkbox" 
                               ${task.completed ? 'checked' : ''} 
                               onchange="todoApp.toggleTask('${task.id}')">
                        <span class="task-text">${this.escapeHtml(task.text)}</span>
                        <input type="text" class="form-control edit-input" value="${this.escapeHtml(task.text)}">
                    </div>
                    <div class="task-actions">
                        <button class="task-btn edit-btn" onclick="todoApp.editTask('${task.id}')">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="task-btn delete-btn" onclick="todoApp.deleteTask('${task.id}')">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            </li>
        `).join('');
    }

    // Update task counts (total, active, completed)
    updateCounts() {
        const allCount = this.tasks.length;
        const activeCount = this.tasks.filter(task => !task.completed).length;
        const completedCount = this.tasks.filter(task => task.completed).length;

        document.getElementById('allCount').textContent = allCount;
        document.getElementById('activeCount').textContent = activeCount;
        document.getElementById('completedCount').textContent = completedCount;

        // Show/hide "clear completed" button
        const clearBtn = document.getElementById('clearCompletedBtn');
        clearBtn.style.display = completedCount > 0 ? 'block' : 'none';
    }

    // --- STORAGE & UTILS ---

    // Save current tasks to localStorage
    saveTasks() {
        localStorage.setItem('todoTasks', JSON.stringify(this.tasks));
    }

    // Show error message with visual feedback
    showError(message) {
        const errorMsg = document.getElementById('errorMessage');
        errorMsg.textContent = message;
        errorMsg.classList.add('show');
        setTimeout(() => {
            errorMsg.classList.remove('show');
        }, 3000);
    }

    // Show green success animation on input field
    showSuccess() {
        const input = document.getElementById('taskInput');
        const originalBg = input.style.backgroundColor;
        input.style.backgroundColor = '#d4edda';
        input.style.borderColor = '#28a745';
        setTimeout(() => {
            input.style.backgroundColor = originalBg;
            input.style.borderColor = '';
        }, 500);
    }

    // Escape HTML special characters (prevent XSS)
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // --- ADVANCED FEATURES (Export / Import / Stats) ---

    // Export tasks as JSON file
    exportTasks() {
        const dataStr = JSON.stringify(this.tasks, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'todo-tasks.json';
        link.click();
        URL.revokeObjectURL(url);
    }

    // Import tasks from a selected JSON file
    importTasks(file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const importedTasks = JSON.parse(e.target.result);
                if (Array.isArray(importedTasks)) {
                    this.tasks = importedTasks;
                    this.saveTasks();
                    this.renderTasks();
                    this.updateCounts();
                    alert('Tasks imported successfully!');
                }
            } catch (error) {
                alert('Invalid file format!');
            }
        };
        reader.readAsText(file);
    }

    // Get basic statistics for tasks
    getStats() {
        const total = this.tasks.length;
        const completed = this.tasks.filter(task => task.completed).length;
        const active = total - completed;
        const completionRate = total > 0 ? Math.round((completed / total) * 100) : 0;
        return { total, completed, active, completionRate };
    }
}

// --- APP INITIALIZATION ---

let todoApp;

// Start application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    todoApp = new TodoApp();
});

// --- KEYBOARD SHORTCUTS & UTILITY EVENTS ---

document.addEventListener('keydown', (e) => {
    // Ctrl + N: Focus input for new task
    if (e.ctrlKey && e.key === 'n') {
        e.preventDefault();
        document.getElementById('taskInput').focus();
    }
    // Ctrl + A: Set filter to "all" (if not in input)
    if (e.ctrlKey && e.key === 'a' && e.target.tagName !== 'INPUT') {
        e.preventDefault();
        todoApp.setFilter('all');
    }
    // Escape: Exit edit mode on all tasks
    if (e.key === 'Escape') {
        document.querySelectorAll('.task-item.editing').forEach(item => {
            item.classList.remove('editing');
            item.querySelector('.edit-btn').innerHTML = '<i class="fas fa-edit"></i>';
        });
    }
});

// On window load, focus the task input
window.addEventListener('load', () => {
    document.getElementById('taskInput').focus();
});

// Save tasks on window unload (as backup)
window.addEventListener('beforeunload', () => {
    if (todoApp && todoApp.tasks.length > 0) {
        todoApp.saveTasks();
    }
});
