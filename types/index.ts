export interface Exercise {
  id: string;
  nome: string;
  categoria: 'Pilates' | 'Calistenia' | 'Musculação' | string;
  grupoMuscular: string;
  musculosSecundarios: string[];
  objetivo: string;
  beneficios: string[];
  explicacao: string;
  passoAPasso: string[];
  errosComuns: string[];
  dicas: string[];
  observacoes: string;
  tempoExecucao: string;
  series: number;
  repeticoes: string | number;
  descanso: string;
  nivel: 'Iniciante' | 'Intermediário' | 'Avançado' | string;
}

export interface WorkoutDay {
  id: string;
  dia: number;
  titulo: string;
  tempoEstimado: string;
  exercicios: Exercise[];
  mensagemMotivacional: string;
}

export interface ProgressData {
  diasConcluidos: number;
  diasRestantes: number;
  sequenciaAtual: number;
  maiorSequencia: number;
  minutosTreinados: number;
  treinosConcluidos: number;
  percentualGeral: number;
}
