export const ROUTINE_DAYS = [
  {
    dia: 1,
    titulo: "Ativação dos Glúteos",
    foco: "Aprender os movimentos e ativar corretamente a musculatura.",
    mensagemMotivacional: "Hoje o foco é aprender a técnica. A qualidade vale mais do que a velocidade.",
    tempo: "15 Minutos",
    aquecimento: [
      { nome: "Hip Circles", info: "30 s" },
      { nome: "Bird Dog", info: "30 s" },
      { nome: "Clamshell", info: "30 s por lado" }
    ],
    exercicios: [
      { id: "shoulder-bridge", nome: "Shoulder Bridge", series: 2, repeticoes: "12", descanso: "30 s" },
      { id: "fire-hydrant", nome: "Fire Hydrant", series: 2, repeticoes: "15 por lado", descanso: "20 s" },
      { id: "standing-hip-abduction", nome: "Standing Hip Abduction", series: 2, repeticoes: "15 por lado", descanso: "20 s" },
      { id: "frog-bridge", nome: "Frog Bridge", series: 2, repeticoes: "15", descanso: "25 s" }
    ],
    finalizacao: [
      { id: "pelvic-lift-hold", nome: "Pelvic Lift Hold", series: 2, tempo: "30 s", descanso: "20 s" }
    ]
  },
  {
    dia: 2,
    titulo: "Estabilidade",
    foco: "Fortalecer o glúteo médio e melhorar a estabilidade",
    mensagemMotivacional: "A estabilidade é a base da força. Concentre-se no controle de cada movimento.",
    tempo: "18 Minutos",
    aquecimento: [
      { nome: "Hip Circles" },
      { nome: "Bird Dog" }
    ],
    exercicios: [
      { id: "side-leg-lift", nome: "Side Leg Lift", series: 2, repeticoes: "15 por lado", descanso: "20-30 s" },
      { id: "clamshell", nome: "Clamshell", series: 2, repeticoes: "15 por lado", descanso: "20-30 s" },
      { id: "side-kick-series", nome: "Side Kick Series", series: 2, repeticoes: "60 s", descanso: "20-30 s" },
      { id: "standing-kickback", nome: "Standing Kickback", series: 2, repeticoes: "15 por lado", descanso: "20-30 s" }
    ],
    finalizacao: [
      { id: "heel-beats", nome: "Heel Beats", series: 2, tempo: "40 s", descanso: "20-30 s" }
    ]
  },
  {
    dia: 3,
    titulo: "Força Inicial",
    foco: "Aumentar a intensidade com exercícios base",
    mensagemMotivacional: "Sinta os músculos trabalhando! A força começa de dentro para fora.",
    tempo: "20 Minutos",
    aquecimento: [],
    exercicios: [
      { id: "hip-thrust", nome: "Hip Thrust", series: 3, repeticoes: "12", descanso: "40 s" },
      { id: "goblet-squat", nome: "Goblet Squat", series: 3, repeticoes: "12", descanso: "40 s" },
      { id: "reverse-lunge", nome: "Reverse Lunge", series: 3, repeticoes: "12 por lado", descanso: "40 s" },
      { id: "kickback-com-elastico", nome: "Kickback com elástico", series: 3, repeticoes: "15 por lado", descanso: "40 s" }
    ]
  },
  {
    dia: 4,
    titulo: "Recuperação Ativa",
    foco: "Treino leve para estimular a circulação e recuperar",
    mensagemMotivacional: "Descansar não é parar. O corpo se transforma também durante a recuperação.",
    tempo: "12 Minutos",
    aquecimento: [],
    exercicios: [
      { id: "swimming", nome: "Swimming", series: 2, repeticoes: "45 s", descanso: "20 s" },
      { id: "bird-dog", nome: "Bird Dog", series: 2, repeticoes: "10 por lado", descanso: "20 s" },
      { id: "hip-circles", nome: "Hip Circles", series: 2, repeticoes: "40 s por lado", descanso: "20 s" },
      { id: "pelvic-lift-hold", nome: "Pelvic Lift Hold", series: 2, repeticoes: "30 s", descanso: "20 s" },
      { id: "side-plank-leg-lift", nome: "Side Plank + Leg Lift", series: 2, repeticoes: "30 s por lado", descanso: "20 s" }
    ]
  },
  {
    dia: 5,
    titulo: "Foco no Glúteo Máximo",
    foco: "Volume e projeção",
    mensagemMotivacional: "Este é o treino para empinar! Dê o seu máximo hoje.",
    tempo: "20 Minutos",
    aquecimento: [],
    exercicios: [
      { id: "hip-thrust", nome: "Hip Thrust", series: 3, repeticoes: "12", descanso: "35 s" },
      { id: "shoulder-bridge", nome: "Shoulder Bridge", series: 3, repeticoes: "12", descanso: "35 s" },
      { id: "donkey-kick", nome: "Donkey Kick", series: 3, repeticoes: "15 por lado", descanso: "35 s" },
      { id: "frog-pumps-com-carga", nome: "Frog Pumps", series: 3, repeticoes: "20", descanso: "35 s" }
    ]
  },
  {
    dia: 6,
    titulo: "Foco no Glúteo Médio",
    foco: "Contorno lateral e firmeza",
    mensagemMotivacional: "O contorno perfeito é construído nos detalhes. Capriche!",
    tempo: "22 Minutos",
    aquecimento: [],
    exercicios: [
      { id: "clamshell", nome: "Clamshell", series: 3, repeticoes: "15 por lado", descanso: "25 s" },
      { id: "fire-hydrant", nome: "Fire Hydrant", series: 3, repeticoes: "15 por lado", descanso: "25 s" },
      { id: "standing-hip-abduction", nome: "Standing Hip Abduction", series: 3, repeticoes: "15 por lado", descanso: "25 s" },
      { id: "curtsy-lunge", nome: "Curtsy Lunge", series: 3, repeticoes: "12 por lado", descanso: "25 s" },
      { id: "wall-sit-abducao", nome: "Wall Sit + Abdução", series: 3, repeticoes: "40 s", descanso: "25 s" }
    ]
  },
  {
    dia: 7,
    titulo: "Integração",
    foco: "Trabalhar todos os grupos",
    mensagemMotivacional: "Primeira semana concluída! O mais importante agora é manter a consistência.",
    tempo: "25 Minutos",
    aquecimento: [],
    exercicios: [
      { id: "bulgarian-split-squat", nome: "Bulgarian Split Squat", series: 3, repeticoes: "10 por lado", descanso: "35 s" },
      { id: "hip-thrust", nome: "Hip Thrust", series: 3, repeticoes: "12", descanso: "35 s" },
      { id: "side-kick-series", nome: "Side Kick Series", series: 3, repeticoes: "60 s", descanso: "35 s" },
      { id: "swimming", nome: "Swimming", series: 3, repeticoes: "45 s", descanso: "35 s" },
      { id: "pelvic-lift-hold", nome: "Pelvic Lift Hold", series: 3, repeticoes: "30 s", descanso: "35 s" }
    ]
  },
  {
    dia: 8,
    titulo: "Volume Intenso",
    foco: "Aumentar a intensidade e o volume",
    mensagemMotivacional: "Semana 2 começa agora. A intensidade subiu, e você também subirá o nível!",
    tempo: "25 Minutos",
    aquecimento: [],
    exercicios: [
      { id: "hip-thrust", nome: "Hip Thrust", series: 4, repeticoes: "12", descanso: "35 s" },
      { id: "romanian-deadlift", nome: "Romanian Deadlift", series: 4, repeticoes: "12", descanso: "35 s" },
      { id: "donkey-kick", nome: "Donkey Kick", series: 4, repeticoes: "15 por lado", descanso: "35 s" },
      { id: "standing-hip-abduction", nome: "Standing Hip Abduction", series: 4, repeticoes: "15 por lado", descanso: "35 s" }
    ]
  },
  {
    dia: 9,
    titulo: "Pernas e Lateral",
    foco: "Unilateralidade e Estabilidade",
    mensagemMotivacional: "Mantenha o foco em cada contração, em cada repetição.",
    tempo: "25 Minutos",
    aquecimento: [],
    exercicios: [
      { id: "bulgarian-split-squat", nome: "Bulgarian", series: 4, repeticoes: "10 por lado", descanso: "30 s" },
      { id: "fire-hydrant", nome: "Fire Hydrant", series: 4, repeticoes: "15 por lado", descanso: "30 s" },
      { id: "clamshell", nome: "Clamshell", series: 4, repeticoes: "15 por lado", descanso: "30 s" },
      { id: "side-plank-leg-lift", nome: "Side Plank + Leg Lift", series: 4, repeticoes: "30 s por lado", descanso: "30 s" }
    ]
  },
  {
    dia: 10,
    titulo: "Força Global",
    foco: "Agachamentos e afundos",
    mensagemMotivacional: "Cada repetição é um passo a mais em direção à sua meta.",
    tempo: "25 Minutos",
    aquecimento: [],
    exercicios: [
      { id: "goblet-squat", nome: "Goblet Squat", series: 4, repeticoes: "12", descanso: "35 s" },
      { id: "reverse-lunge", nome: "Reverse Lunge", series: 4, repeticoes: "12 por lado", descanso: "35 s" },
      { id: "step-up", nome: "Step Up", series: 4, repeticoes: "12 por lado", descanso: "35 s" },
      { id: "heel-beats", nome: "Heel Beats", series: 4, repeticoes: "40 s", descanso: "35 s" }
    ]
  },
  {
    dia: 11,
    titulo: "Treino Regenerativo",
    foco: "Ativação sem carga pesada",
    mensagemMotivacional: "Movimente-se para recuperar e oxigenar seus músculos.",
    tempo: "15 Minutos",
    aquecimento: [],
    exercicios: [
      { id: "swimming", nome: "Swimming", series: 3, repeticoes: "45 s", descanso: "20 s" },
      { id: "hip-circles", nome: "Hip Circles", series: 3, repeticoes: "40 s por lado", descanso: "20 s" },
      { id: "bird-dog", nome: "Bird Dog", series: 3, repeticoes: "10 por lado", descanso: "20 s" },
      { id: "pelvic-lift-hold", nome: "Pelvic Lift Hold", series: 3, repeticoes: "30 s", descanso: "20 s" }
    ]
  },
  {
    dia: 12,
    titulo: "Glúteo Máximo Avançado",
    foco: "Extensão de quadril com B-Stance",
    mensagemMotivacional: "Exija um pouco mais do seu corpo hoje, os resultados compensarão.",
    tempo: "25 Minutos",
    aquecimento: [],
    exercicios: [
      { id: "hip-thrust", nome: "Hip Thrust", series: 4, repeticoes: "12", descanso: "35 s" },
      { id: "b-stance-hip-thrust", nome: "B-Stance Hip Thrust", series: 4, repeticoes: "12 por lado", descanso: "35 s" },
      { id: "kickback-com-elastico", nome: "Kickback", series: 4, repeticoes: "15 por lado", descanso: "35 s" },
      { id: "frog-bridge", nome: "Frog Bridge", series: 4, repeticoes: "15", descanso: "35 s" }
    ]
  },
  {
    dia: 13,
    titulo: "Isolamento Intenso",
    foco: "Glúteo médio e unilateral",
    mensagemMotivacional: "Foque na técnica. Sinta a musculatura certa trabalhar.",
    tempo: "25 Minutos",
    aquecimento: [],
    exercicios: [
      { id: "single-leg-bridge", nome: "Single Leg Bridge", series: 4, repeticoes: "10 por lado", descanso: "30 s" },
      { id: "curtsy-lunge", nome: "Curtsy Lunge", series: 4, repeticoes: "12 por lado", descanso: "30 s" },
      { id: "standing-kickback", nome: "Standing Kickback", series: 4, repeticoes: "15 por lado", descanso: "30 s" },
      { id: "side-leg-lift", nome: "Side Leg Lift", series: 4, repeticoes: "15 por lado", descanso: "30 s" }
    ]
  },
  {
    dia: 14,
    titulo: "Circuito de Fechamento",
    foco: "Resistência muscular global",
    mensagemMotivacional: "Você chegou a duas semanas. Continue priorizando técnica e regularidade.",
    tempo: "30 Minutos",
    aquecimento: [],
    exercicios: [
      { id: "hip-thrust", nome: "Hip Thrust", series: 4, repeticoes: "12", descanso: "30 s" },
      { id: "bulgarian-split-squat", nome: "Bulgarian", series: 4, repeticoes: "10 por lado", descanso: "30 s" },
      { id: "fire-hydrant", nome: "Fire Hydrant", series: 4, repeticoes: "15 por lado", descanso: "30 s" },
      { id: "swimming", nome: "Swimming", series: 4, repeticoes: "45 s", descanso: "30 s" },
      { id: "wall-sit-abducao", nome: "Wall Sit + Abdução", series: 4, repeticoes: "40 s", descanso: "30 s" }
    ]
  },
  {
    dia: 15,
    titulo: "Alta Tensão",
    foco: "Aumentar tempo sob tensão",
    mensagemMotivacional: "Semana 3! Seu corpo já é mais forte e resistente. Aproveite essa força.",
    tempo: "25 Minutos",
    aquecimento: [],
    exercicios: [
      { id: "hip-thrust", nome: "Hip Thrust", series: 4, repeticoes: "15", descanso: "35 s" },
      { id: "romanian-deadlift", nome: "Romanian Deadlift", series: 4, repeticoes: "12", descanso: "35 s" },
      { id: "hip-abduction-com-miniband", nome: "Hip Abduction", series: 4, repeticoes: "20", descanso: "35 s" }
    ]
  },
  {
    dia: 16,
    titulo: "Unilateral Focado",
    foco: "Estabilidade e força profunda",
    mensagemMotivacional: "Mantenha o equilíbrio, conecte a mente ao músculo.",
    tempo: "25 Minutos",
    aquecimento: [],
    exercicios: [
      { id: "bulgarian-split-squat", nome: "Bulgarian", series: 4, repeticoes: "10 por lado", descanso: "35 s" },
      { id: "single-leg-romanian-deadlift", nome: "Single Leg RDL", series: 4, repeticoes: "10 por lado", descanso: "35 s" },
      { id: "clamshell", nome: "Clamshell", series: 4, repeticoes: "15 por lado", descanso: "35 s" },
      { id: "fire-hydrant", nome: "Fire Hydrant", series: 4, repeticoes: "15 por lado", descanso: "35 s" }
    ]
  },
  {
    dia: 17,
    titulo: "Resistência de Base",
    foco: "Exercícios em pé e isolados",
    mensagemMotivacional: "Pernas e glúteos fortes para encarar qualquer desafio.",
    tempo: "25 Minutos",
    aquecimento: [],
    exercicios: [
      { id: "goblet-squat", nome: "Goblet Squat", series: 4, repeticoes: "12", descanso: "35 s" },
      { id: "step-up", nome: "Step Up", series: 4, repeticoes: "12 por lado", descanso: "35 s" },
      { id: "kickback-com-elastico", nome: "Kickback", series: 4, repeticoes: "15 por lado", descanso: "35 s" },
      { id: "heel-beats", nome: "Heel Beats", series: 4, repeticoes: "40 s", descanso: "35 s" }
    ]
  },
  {
    dia: 18,
    titulo: "Recuperação Ativa",
    foco: "Ativação profunda e relaxamento",
    mensagemMotivacional: "Quase no fim do programa! Um merecido descanso ativo.",
    tempo: "15 Minutos",
    aquecimento: [],
    exercicios: [
      { id: "swimming", nome: "Swimming", series: 3, repeticoes: "45 s", descanso: "20 s" },
      { id: "hip-circles", nome: "Hip Circles", series: 3, repeticoes: "40 s por lado", descanso: "20 s" },
      { id: "bird-dog", nome: "Bird Dog", series: 3, repeticoes: "10 por lado", descanso: "20 s" },
      { id: "side-plank-leg-lift", nome: "Side Plank", series: 3, repeticoes: "30 s por lado", descanso: "20 s" },
      { id: "pelvic-lift-hold", nome: "Pelvic Lift Hold", series: 3, repeticoes: "30 s", descanso: "20 s" }
    ]
  },
  {
    dia: 19,
    titulo: "Variações B-Stance",
    foco: "Controle unilateral com apoio",
    mensagemMotivacional: "Mais controle, mais consciência corporal, mais resultados.",
    tempo: "25 Minutos",
    aquecimento: [],
    exercicios: [
      { id: "hip-thrust", nome: "Hip Thrust", series: 4, repeticoes: "12", descanso: "35 s" },
      { id: "b-stance-romanian-deadlift", nome: "B-Stance Romanian Deadlift", series: 4, repeticoes: "10 por lado", descanso: "35 s" },
      { id: "standing-hip-abduction", nome: "Standing Hip Abduction", series: 4, repeticoes: "15 por lado", descanso: "35 s" },
      { id: "frog-pumps-com-carga", nome: "Frog Pumps", series: 4, repeticoes: "20", descanso: "35 s" }
    ]
  },
  {
    dia: 20,
    titulo: "Circuito Completo",
    foco: "Trabalho em todo o corpo",
    mensagemMotivacional: "O penúltimo dia. Mostre para si mesma do que você é capaz!",
    tempo: "30 Minutos",
    aquecimento: [],
    exercicios: [
      { id: "shoulder-bridge", nome: "Shoulder Bridge", series: 4, repeticoes: "12", descanso: "30 s" },
      { id: "bulgarian-split-squat", nome: "Bulgarian", series: 4, repeticoes: "10 por lado", descanso: "30 s" },
      { id: "fire-hydrant", nome: "Fire Hydrant", series: 4, repeticoes: "15 por lado", descanso: "30 s" },
      { id: "step-up", nome: "Step Up", series: 4, repeticoes: "12 por lado", descanso: "30 s" },
      { id: "clamshell", nome: "Clamshell", series: 4, repeticoes: "15 por lado", descanso: "30 s" },
      { id: "wall-sit-abducao", nome: "Wall Sit + Abdução", series: 4, repeticoes: "40 s", descanso: "30 s" }
    ]
  },
  {
    dia: 21,
    titulo: "Desafio Final",
    foco: "Hipertrofia e Resistência",
    mensagemMotivacional: "Parabéns! Você concluiu os 21 dias do Método Glúteo 3D. A evolução acontece com consistência. Continue treinando e avance para o próximo ciclo aumentando gradualmente a resistência ou a carga, sempre mantendo a execução correta.",
    tempo: "35 Minutos",
    aquecimento: [],
    exercicios: [
      { id: "hip-thrust", nome: "Hip Thrust", series: 4, repeticoes: "15", descanso: "35 s" },
      { id: "bulgarian-split-squat", nome: "Bulgarian Split Squat", series: 4, repeticoes: "12 por lado", descanso: "35 s" },
      { id: "romanian-deadlift", nome: "Romanian Deadlift", series: 4, repeticoes: "12", descanso: "35 s" },
      { id: "fire-hydrant", nome: "Fire Hydrant", series: 3, repeticoes: "20 por lado", descanso: "35 s" },
      { id: "clamshell", nome: "Clamshell", series: 3, repeticoes: "20 por lado", descanso: "35 s" },
      { id: "frog-pumps-com-carga", nome: "Frog Pumps com carga", series: 3, repeticoes: "25", descanso: "35 s" }
    ],
    finalizacao: [
      { nome: "Alongamento final", tempo: "2 minutos" }
    ]
  }
];
