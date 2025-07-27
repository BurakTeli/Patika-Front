// src/pages/Home/Home.tsx

// Import component-specific styles
import './Home.css';

// Home page component for library management dashboard
const Home = () => {
  return (
    <div className="home-container">
      {/* Header Section */}
      <header className="home-header">
        <h1>Kütüphane Yönetim Paneli</h1>
        <p>
          Kütüphane kaynaklarınızı dijital olarak yönetin, kolayca kitap ekleyin, ödünç alın ve iade edin.
        </p>
      </header>

      {/* Feature Overview Cards */}
      <section className="grid-section">
        <div className="card">
          <h2>📌 Proje Amacı</h2>
          <p>
            Kütüphane yönetimini kolaylaştırmak ve kitap, yazar, yayınevi, kategori işlemlerini merkezi panelden yönetmek.
          </p>
        </div>
        <div className="card">
          <h2>🛠️ Nasıl Kullanılır?</h2>
          <ul>
            <li>Üst menüden geçiş yap.</li>
            <li>İlgili verileri ekle / düzenle.</li>
            <li>Ödünç ve iade işlemlerini takip et.</li>
            <li>Bildirimler üzerinden işlem durumunu öğren.</li>
          </ul>
        </div>
        <div className="card">
          <h2>⚠️ Uyarılar</h2>
          <ul>
            <li>Kategori silme: ilişkili kitap varsa engellenir.</li>
            <li>Yazar/yayınevi silme: ilişkili tüm kayıtlar silinir.</li>
            <li>Ödünç alınan kitapların stoğu azalır.</li>
            <li>İade edilen kitapların stoğu artar.</li>
          </ul>
        </div>
        <div className="card">
          <h2>🚀 Başlıca Özellikler</h2>
          <ul>
            <li>Kitap / Yazar / Yayınevi / Kategori Yönetimi</li>
            <li>Stok Takibi</li>
            <li>Modern UI, responsive tasarım</li>
            <li>Bildirim Sistemi</li>
            <li>Hızlı arama ve filtreleme</li>
          </ul>
        </div>
      </section>

      {/* Statistics Overview */}
      <section className="stats-section">
        <div className="stat-box bg-blue">📚 Kitaplar <span>0</span></div>
        <div className="stat-box bg-green">👤 Yazarlar <span>0</span></div>
        <div className="stat-box bg-orange">🏷️ Kategoriler <span>0</span></div>
        <div className="stat-box bg-red">📖 Ödünç <span>0</span></div>
      </section>

      {/* Recent Activity Section */}
      <section className="recent-section">
        <div className="recent-card">
          <h3>🆕 Son Eklenen Kitaplar</h3>
          <p>Henüz kitap eklenmemiş.</p>
        </div>
        <div className="recent-card">
          <h3>🔁 Son Ödünç İşlemleri</h3>
          <p>Henüz ödünç kaydı bulunmuyor.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
