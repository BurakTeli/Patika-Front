interface ProgressBarProps {
  current: number; // Şu anki soru indeksi (0’dan başlar)
  total: number; // Toplam soru sayısı
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const percentage = ((current + 1) / total) * 100;

  return (
    <div
      style={{
        backgroundColor: "#ddd",
        borderRadius: 10,
        height: 15,
        width: "100%",
        maxWidth: 600,
        margin: "20px auto",
      }}
    >
      <div
        style={{
          width: `${percentage}%`,
          height: "100%",
          backgroundColor: "#23194F",
          borderRadius: 10,
          transition: "width 0.3s ease",
        }}
      />
    </div>
  );
};

export default ProgressBar;
