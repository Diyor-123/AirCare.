import { cn } from "@/lib/utils";

interface ExerciseCardProps {
  title: string;
  duration: string;
  description: string;
  photoUrl: string;
  warning: string;
  variant?: "red" | "green"; // для фона заголовка
}

const ExerciseCard = ({
  title,
  duration,
  description,
  photoUrl,
  warning,
  variant = "red",
}: ExerciseCardProps) => {
  const bgColor = variant === "red" ? "bg-red-600" : "bg-green-600";
  const textColor = "text-white";

  return (
    <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[520px] w-full max-w-sm mx-auto">
      {/* Фоновая картинка - твоя оригинальная карточка */}
      <img
        src={photoUrl}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Полупрозрачный оверлей для читаемости текста */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/60" />

      {/* Контент поверх изображения */}
      <div className="relative h-full flex flex-col justify-between p-6 text-white">
        {/* Заголовок и время */}
        <div>
          <div className={cn("inline-block px-4 py-1 rounded-full mb-3", bgColor)}>
            <span className="font-bold text-sm">{title}</span>
          </div>
          <p className="text-lg font-medium flex items-center gap-2">
            <span className="text-2xl">⏰</span> {duration}
          </p>
        </div>

        {/* Описание */}
        <div className="mt-4 flex-1">
          <p className="text-sm leading-relaxed opacity-95 whitespace-pre-line">
            {description}
          </p>
        </div>

        {/* Предупреждение внизу */}
        <div className="mt-4 pt-4 border-t border-white/30">
          <p className="text-xs font-medium text-yellow-300 flex items-start gap-2">
            <span className="text-lg">⚠️</span>
            {warning}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExerciseCard;
