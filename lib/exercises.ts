import { Exercise } from "@/types";

export const EXERCISES: Exercise[] = [
  {
    id: "shoulder-bridge",
    nome: "Shoulder Bridge",
    categoria: "Pilates",
    grupoMuscular: "Glúteo Máximo",
    musculosSecundarios: ["Posterior de coxa", "Core", "Lombar"],
    objetivo: "Ativar o glúteo máximo, melhorar a estabilidade do quadril e fortalecer a cadeia posterior.",
    beneficios: [
      "Melhora a ativação dos glúteos",
      "Ajuda na estabilidade da pelve",
      "Fortalece posterior de coxa",
      "Melhora postura",
      "Excelente exercício de aquecimento"
    ],
    explicacao: "",
    passoAPasso: [
      "Deite de costas.",
      "Flexione os joelhos.",
      "Apoie os pés na largura dos quadris.",
      "Mantenha os braços ao lado do corpo.",
      "Contraia o abdômen.",
      "Empurre os calcanhares contra o chão.",
      "Eleve lentamente o quadril.",
      "Forme uma linha entre joelhos, quadris e ombros.",
      "Contraia os glúteos por 2 segundos.",
      "Retorne lentamente sem deixar o quadril cair."
    ],
    errosComuns: [
      "Subir usando apenas a lombar.",
      "Abrir excessivamente os joelhos.",
      "Levantar rápido demais.",
      "Não contrair os glúteos no topo."
    ],
    dicas: [
      "Pense em empurrar o chão com os calcanhares.",
      "Mantenha o abdômen firme.",
      "Faça o movimento lentamente."
    ],
    observacoes: "",
    tempoExecucao: "45 segundos",
    series: 3,
    repeticoes: "-",
    descanso: "30 segundos",
    nivel: "Iniciante",
  },
  {
    id: "single-leg-bridge",
    nome: "Single Leg Bridge",
    categoria: "Pilates",
    grupoMuscular: "Glúteo Máximo",
    musculosSecundarios: ["Glúteo Médio", "Core", "Posterior"],
    objetivo: "Aumentar força unilateral e corrigir desequilíbrios.",
    beneficios: [
      "Maior ativação do glúteo",
      "Melhora equilíbrio",
      "Trabalha estabilidade",
      "Corrige diferenças entre os lados"
    ],
    explicacao: "",
    passoAPasso: [
      "Faça a posição da ponte.",
      "Estenda uma perna.",
      "Eleve o quadril apenas com a perna apoiada.",
      "Contraia os glúteos.",
      "Retorne lentamente."
    ],
    errosComuns: [
      "Deixar o quadril girar.",
      "Empurrar com a lombar.",
      "Movimento muito rápido."
    ],
    dicas: [
      "Imagine manter a bacia totalmente reta.",
      "Suba apenas até manter alinhamento."
    ],
    observacoes: "",
    tempoExecucao: "-",
    series: 3,
    repeticoes: "10 por lado",
    descanso: "30 segundos",
    nivel: "Intermediário",
  },
  {
    id: "frog-bridge",
    nome: "Frog Bridge",
    categoria: "Pilates",
    grupoMuscular: "Glúteo Máximo",
    musculosSecundarios: ["Adutores"],
    objetivo: "Maximizar a contração dos glúteos.",
    beneficios: [
      "Excelente conexão mente-músculo",
      "Grande ativação do glúteo máximo",
      "Baixa sobrecarga na lombar"
    ],
    explicacao: "",
    passoAPasso: [
      "Deite de costas.",
      "Una as solas dos pés.",
      "Abra os joelhos.",
      "Eleve o quadril.",
      "Contraia forte no topo.",
      "Desça lentamente."
    ],
    errosComuns: [
      "Subir rápido.",
      "Relaxar os glúteos.",
      "Arquear a lombar."
    ],
    dicas: [],
    observacoes: "",
    tempoExecucao: "40 segundos",
    series: 3,
    repeticoes: "-",
    descanso: "25 segundos",
    nivel: "Iniciante",
  },
  {
    id: "clamshell",
    nome: "Clamshell",
    categoria: "Pilates",
    grupoMuscular: "Glúteo Médio",
    musculosSecundarios: ["Glúteo Mínimo"],
    objetivo: "Fortalecer a lateral dos glúteos.",
    beneficios: [
      "Melhora estabilidade do quadril",
      "Ajuda a arredondar a parte lateral",
      "Excelente ativação do glúteo médio"
    ],
    explicacao: "",
    passoAPasso: [
      "Deite de lado.",
      "Flexione joelhos.",
      "Mantenha pés unidos.",
      "Abra apenas o joelho superior.",
      "Não mova o quadril.",
      "Retorne lentamente."
    ],
    errosComuns: [
      "Girar o tronco.",
      "Levantar os pés.",
      "Abrir demais."
    ],
    dicas: [],
    observacoes: "",
    tempoExecucao: "-",
    series: 3,
    repeticoes: "15 por lado",
    descanso: "20 segundos",
    nivel: "Iniciante",
  },
  {
    id: "fire-hydrant",
    nome: "Fire Hydrant",
    categoria: "Pilates",
    grupoMuscular: "Glúteo Médio",
    musculosSecundarios: ["Glúteo Mínimo"],
    objetivo: "Melhorar a abdução do quadril.",
    beneficios: [
      "Fortalece lateral dos glúteos",
      "Melhora estabilidade",
      "Excelente ativação muscular"
    ],
    explicacao: "",
    passoAPasso: [
      "Apoie mãos e joelhos.",
      "Abdômen contraído.",
      "Eleve um joelho lateralmente.",
      "Pare quando o quadril começar a girar.",
      "Retorne lentamente."
    ],
    errosComuns: [
      "Girar o tronco.",
      "Subir demais.",
      "Perder estabilidade."
    ],
    dicas: [],
    observacoes: "",
    tempoExecucao: "-",
    series: 3,
    repeticoes: "15 por lado",
    descanso: "20 segundos",
    nivel: "Iniciante",
  },
  {
    id: "donkey-kick",
    nome: "Donkey Kick",
    categoria: "Pilates",
    grupoMuscular: "Glúteo Máximo",
    musculosSecundarios: [],
    objetivo: "Desenvolver extensão de quadril.",
    beneficios: [
      "Excelente contração",
      "Fácil execução",
      "Pode ser progressivo"
    ],
    explicacao: "",
    passoAPasso: [
      "Apoie mãos e joelhos.",
      "Flexione a perna em 90°.",
      "Empurre o pé em direção ao teto.",
      "Contraia o glúteo.",
      "Retorne devagar."
    ],
    errosComuns: [],
    dicas: [],
    observacoes: "",
    tempoExecucao: "-",
    series: 3,
    repeticoes: "15 por lado",
    descanso: "20 segundos",
    nivel: "Iniciante",
  },
  {
    id: "side-leg-lift",
    nome: "Side Leg Lift",
    categoria: "Pilates",
    grupoMuscular: "Glúteo Médio",
    musculosSecundarios: [],
    objetivo: "Fortalecer lateral do quadril.",
    beneficios: [
      "Trabalha glúteo médio",
      "Melhora equilíbrio",
      "Estabiliza o quadril"
    ],
    explicacao: "",
    passoAPasso: [
      "Deite de lado.",
      "Corpo alinhado.",
      "Levante a perna.",
      "Pause 1 segundo.",
      "Desça lentamente."
    ],
    errosComuns: [],
    dicas: [],
    observacoes: "",
    tempoExecucao: "-",
    series: 3,
    repeticoes: "15 por lado",
    descanso: "20 segundos",
    nivel: "Iniciante",
  },
  {
    id: "side-kick-series",
    nome: "Side Kick Series",
    categoria: "Pilates",
    grupoMuscular: "Glúteo Médio",
    musculosSecundarios: [],
    objetivo: "Melhorar controle e resistência.",
    beneficios: [],
    explicacao: "",
    passoAPasso: [
      "Deite de lado.",
      "Leve a perna para frente.",
      "Depois para trás.",
      "Controle todo o movimento.",
      "Repita continuamente."
    ],
    errosComuns: [],
    dicas: [],
    observacoes: "",
    tempoExecucao: "60 segundos",
    series: 2,
    repeticoes: "-",
    descanso: "30 segundos",
    nivel: "Iniciante",
  },
  {
    id: "swimming",
    nome: "Swimming",
    categoria: "Pilates",
    grupoMuscular: "Glúteo Máximo",
    musculosSecundarios: ["Lombar", "Posterior", "Ombros"],
    objetivo: "Fortalecer cadeia posterior.",
    beneficios: [],
    explicacao: "",
    passoAPasso: [
      "Deite de barriga para baixo.",
      "Eleve braços e pernas.",
      "Alterne braços e pernas como se estivesse nadando.",
      "Mantenha o abdômen ativo."
    ],
    errosComuns: [],
    dicas: [],
    observacoes: "",
    tempoExecucao: "45 segundos",
    series: 3,
    repeticoes: "-",
    descanso: "30 segundos",
    nivel: "Iniciante",
  },
  {
    id: "bird-dog",
    nome: "Bird Dog",
    categoria: "Pilates",
    grupoMuscular: "Core",
    musculosSecundarios: ["Glúteo Máximo"],
    objetivo: "Melhorar estabilidade corporal.",
    beneficios: [],
    explicacao: "",
    passoAPasso: [
      "Apoie mãos e joelhos.",
      "Estenda braço direito.",
      "Estenda perna esquerda.",
      "Mantenha equilíbrio.",
      "Retorne.",
      "Alterne."
    ],
    errosComuns: [],
    dicas: [],
    observacoes: "",
    tempoExecucao: "-",
    series: 3,
    repeticoes: "10 por lado",
    descanso: "25 segundos",
    nivel: "Iniciante",
  },
  {
    id: "standing-hip-abduction",
    nome: "Standing Hip Abduction",
    categoria: "Pilates",
    grupoMuscular: "Glúteo Médio",
    musculosSecundarios: ["Glúteo Mínimo", "Core"],
    objetivo: "Fortalecer a musculatura lateral do quadril, melhorar o equilíbrio e a estabilidade da pelve.",
    beneficios: [
      "Aumenta a estabilidade do quadril.",
      "Fortalece o glúteo médio.",
      "Melhora o equilíbrio corporal.",
      "Auxilia na prevenção de desalinhamentos durante caminhada e corrida."
    ],
    explicacao: "",
    passoAPasso: [
      "Fique em pé com os pés alinhados aos quadris.",
      "Apoie-se levemente em uma parede ou cadeira, se necessário.",
      "Contraia o abdômen.",
      "Eleve lentamente uma perna para o lado sem inclinar o tronco.",
      "Pare quando sentir a contração do glúteo.",
      "Retorne lentamente.",
      "Repita do outro lado."
    ],
    errosComuns: [
      "Inclinar o tronco para compensar.",
      "Girar a ponta do pé para cima.",
      "Fazer movimentos rápidos."
    ],
    dicas: [
      "Mantenha o pé apontado para frente.",
      "O movimento deve partir do quadril."
    ],
    observacoes: "",
    tempoExecucao: "-",
    series: 3,
    repeticoes: "15 por lado",
    descanso: "20 segundos",
    nivel: "Iniciante",
  },
  {
    id: "hip-hinge",
    nome: "Hip Hinge",
    categoria: "Pilates",
    grupoMuscular: "Glúteo Máximo",
    musculosSecundarios: ["Posterior de coxa", "Lombar", "Core"],
    objetivo: "Ensinar o padrão correto de dobrar o quadril sem sobrecarregar a coluna.",
    beneficios: [
      "Melhora a mecânica corporal.",
      "Ativa os glúteos.",
      "Prepara para exercícios mais avançados.",
      "Reduz compensações lombares."
    ],
    explicacao: "",
    passoAPasso: [
      "Fique em pé.",
      "Flexione levemente os joelhos.",
      "Empurre o quadril para trás.",
      "Incline o tronco mantendo a coluna neutra.",
      "Sinta alongar a parte posterior da coxa.",
      "Contraia os glúteos para retornar."
    ],
    errosComuns: [
      "Arredondar a coluna.",
      "Dobrar apenas os joelhos.",
      "Olhar para baixo."
    ],
    dicas: [
      "Imagine fechar uma gaveta com o quadril.",
      "O movimento acontece no quadril, não na coluna."
    ],
    observacoes: "",
    tempoExecucao: "-",
    series: 3,
    repeticoes: "12",
    descanso: "30 segundos",
    nivel: "Iniciante",
  },
  {
    id: "hip-circles",
    nome: "Hip Circles",
    categoria: "Pilates",
    grupoMuscular: "Glúteo Médio",
    musculosSecundarios: ["Core", "Flexores do quadril"],
    objetivo: "Melhorar controle motor e mobilidade do quadril.",
    beneficios: [
      "Aumenta mobilidade.",
      "Melhora coordenação.",
      "Fortalece estabilizadores."
    ],
    explicacao: "",
    passoAPasso: [
      "Apoie mãos e joelhos.",
      "Eleve um joelho alguns centímetros.",
      "Faça círculos lentos com o quadril.",
      "Complete todas as repetições.",
      "Inverta o sentido.",
      "Troque de lado."
    ],
    errosComuns: [
      "Movimentos rápidos.",
      "Girar o tronco.",
      "Perder estabilidade."
    ],
    dicas: [],
    observacoes: "",
    tempoExecucao: "40 segundos por lado",
    series: 2,
    repeticoes: "-",
    descanso: "20 segundos",
    nivel: "Iniciante",
  },
  {
    id: "pelvic-lift-hold",
    nome: "Pelvic Lift Hold",
    categoria: "Pilates",
    grupoMuscular: "Glúteo Máximo",
    musculosSecundarios: ["Core", "Posterior de coxa"],
    objetivo: "Desenvolver resistência isométrica dos glúteos.",
    beneficios: [
      "Aumenta resistência muscular.",
      "Melhora estabilidade.",
      "Fortalece a cadeia posterior."
    ],
    explicacao: "",
    passoAPasso: [
      "Faça uma ponte.",
      "Mantenha o quadril elevado.",
      "Contraia os glúteos continuamente.",
      "Respire normalmente.",
      "Abaixe lentamente."
    ],
    errosComuns: [
      "Relaxar os glúteos.",
      "Deixar o quadril cair.",
      "Prender a respiração."
    ],
    dicas: [],
    observacoes: "",
    tempoExecucao: "30 segundos",
    series: 3,
    repeticoes: "-",
    descanso: "25 segundos",
    nivel: "Iniciante",
  },
  {
    id: "side-plank-leg-lift",
    nome: "Side Plank + Leg Lift",
    categoria: "Pilates",
    grupoMuscular: "Glúteo Médio",
    musculosSecundarios: ["Core", "Ombros"],
    objetivo: "Fortalecer simultaneamente o core e a musculatura lateral do quadril.",
    beneficios: [
      "Excelente estabilidade.",
      "Trabalha equilíbrio.",
      "Fortalece abdômen e glúteos."
    ],
    explicacao: "",
    passoAPasso: [
      "Faça uma prancha lateral.",
      "Apoie o antebraço.",
      "Eleve o quadril.",
      "Levante lentamente a perna superior.",
      "Retorne sem perder estabilidade."
    ],
    errosComuns: [
      "Quadril caído.",
      "Movimento rápido.",
      "Pescoço desalinhado."
    ],
    dicas: [],
    observacoes: "",
    tempoExecucao: "30 segundos por lado",
    series: 2,
    repeticoes: "-",
    descanso: "30 segundos",
    nivel: "Intermediário",
  },
  {
    id: "reverse-tabletop-leg-lift",
    nome: "Reverse Tabletop Leg Lift",
    categoria: "Pilates",
    grupoMuscular: "Glúteo Máximo",
    musculosSecundarios: ["Posterior de coxa", "Ombros", "Core"],
    objetivo: "Melhorar força posterior e estabilidade.",
    beneficios: [
      "Fortalece glúteos.",
      "Trabalha coordenação.",
      "Desenvolve estabilidade."
    ],
    explicacao: "",
    passoAPasso: [
      "Sente-se no chão.",
      "Apoie mãos atrás do corpo.",
      "Flexione os joelhos.",
      "Eleve o quadril formando uma mesa.",
      "Estenda uma perna.",
      "Retorne lentamente.",
      "Alterne."
    ],
    errosComuns: [
      "Deixar o quadril cair.",
      "Levantar rápido.",
      "Ombros instáveis."
    ],
    dicas: [],
    observacoes: "",
    tempoExecucao: "-",
    series: 3,
    repeticoes: "10 por lado",
    descanso: "30 segundos",
    nivel: "Iniciante",
  },
  {
    id: "frog-kick",
    nome: "Frog Kick",
    categoria: "Pilates",
    grupoMuscular: "Glúteo Máximo",
    musculosSecundarios: ["Adutores"],
    objetivo: "Intensificar a contração do glúteo através de uma variação inspirada na posição de 'rã'.",
    beneficios: [
      "Excelente contração muscular.",
      "Baixo impacto.",
      "Fácil execução."
    ],
    explicacao: "",
    passoAPasso: [
      "Deite de barriga para baixo.",
      "Flexione os joelhos.",
      "Una as solas dos pés.",
      "Eleve as pernas utilizando os glúteos.",
      "Retorne lentamente."
    ],
    errosComuns: [
      "Movimento brusco.",
      "Arquear excessivamente a lombar."
    ],
    dicas: [],
    observacoes: "",
    tempoExecucao: "-",
    series: 3,
    repeticoes: "15",
    descanso: "20 segundos",
    nivel: "Iniciante",
  },
  {
    id: "heel-beats",
    nome: "Heel Beats",
    categoria: "Pilates",
    grupoMuscular: "Glúteo Máximo",
    musculosSecundarios: ["Posterior de coxa", "Lombar"],
    objetivo: "Melhorar resistência dos glúteos.",
    beneficios: [
      "Grande tempo sob tensão.",
      "Excelente finalizador de treino.",
      "Fortalece cadeia posterior."
    ],
    explicacao: "",
    passoAPasso: [
      "Deite de barriga para baixo.",
      "Eleve levemente as pernas.",
      "Bata os calcanhares um no outro em pequenos movimentos.",
      "Mantenha os glúteos contraídos durante todo o exercício."
    ],
    errosComuns: [
      "Movimentos exagerados.",
      "Relaxar os glúteos.",
      "Forçar a lombar."
    ],
    dicas: [],
    observacoes: "",
    tempoExecucao: "40 segundos",
    series: 3,
    repeticoes: "-",
    descanso: "20 segundos",
    nivel: "Iniciante",
  },
  {
    id: "pilates-squat-hold",
    nome: "Pilates Squat Hold",
    categoria: "Pilates",
    grupoMuscular: "Glúteo Máximo",
    musculosSecundarios: ["Quadríceps", "Core"],
    objetivo: "Melhorar resistência isométrica dos membros inferiores.",
    beneficios: [
      "Desenvolve resistência.",
      "Melhora estabilidade.",
      "Ativa glúteos continuamente."
    ],
    explicacao: "",
    passoAPasso: [
      "Afaste os pés na largura dos ombros.",
      "Flexione os joelhos até aproximadamente 90° (ou até onde conseguir manter boa postura, sem dor).",
      "Mantenha o peso distribuído nos calcanhares e no meio dos pés.",
      "Contraia abdômen e glúteos.",
      "Permaneça na posição pelo tempo indicado."
    ],
    errosComuns: [
      "Deixar os joelhos colapsarem para dentro.",
      "Inclinar excessivamente o tronco.",
      "Levantar os calcanhares."
    ],
    dicas: [],
    observacoes: "",
    tempoExecucao: "30 segundos",
    series: 3,
    repeticoes: "-",
    descanso: "30 segundos",
    nivel: "Iniciante",
  },
  {
    id: "standing-kickback",
    nome: "Standing Kickback",
    categoria: "Pilates",
    grupoMuscular: "Glúteo Máximo",
    musculosSecundarios: ["Core"],
    objetivo: "Melhorar extensão do quadril e ativação do glúteo.",
    beneficios: [
      "Fácil de executar.",
      "Excelente para iniciantes.",
      "Melhora controle muscular."
    ],
    explicacao: "",
    passoAPasso: [
      "Fique em pé.",
      "Apoie-se levemente em uma parede ou cadeira.",
      "Contraia o abdômen.",
      "Estenda uma perna para trás sem arquear a lombar.",
      "Contraia o glúteo no final do movimento.",
      "Retorne lentamente."
    ],
    errosComuns: [
      "Inclinar o tronco para frente.",
      "Balançar o corpo.",
      "Arquear a lombar."
    ],
    dicas: [
      "O movimento deve ser curto e controlado.",
      "Priorize a contração do glúteo, não a altura da perna."
    ],
    observacoes: "",
    tempoExecucao: "-",
    series: 3,
    repeticoes: "15 por lado",
    descanso: "20 segundos",
    nivel: "Iniciante",
  },
  {
    id: "bulgarian-split-squat",
    nome: "Bulgarian Split Squat",
    categoria: "Calistenia",
    grupoMuscular: "Glúteo Máximo",
    musculosSecundarios: ["Quadríceps", "Posterior de Coxa", "Core"],
    objetivo: "Desenvolver força unilateral, aumentar a ativação dos glúteos e melhorar o equilíbrio.",
    beneficios: [
      "Excelente para projeção dos glúteos.",
      "Corrige desequilíbrios entre as pernas.",
      "Desenvolve estabilidade.",
      "Grande amplitude de movimento."
    ],
    explicacao: "",
    passoAPasso: [
      "Posicione um pé sobre um banco ou cadeira atrás de você.",
      "O outro pé permanece firme no chão.",
      "Contraia o abdômen.",
      "Flexione lentamente o joelho da frente.",
      "Desça até aproximadamente 90° ou até onde conseguir manter boa técnica.",
      "Empurre o chão com o calcanhar da frente.",
      "Retorne controlando o movimento."
    ],
    errosComuns: [
      "Inclinar excessivamente o tronco.",
      "Apoiar força na perna de trás.",
      "Deixar o joelho entrar para dentro.",
      "Descer muito rápido."
    ],
    dicas: [
      "Concentre a força na perna da frente.",
      "Pense em empurrar o chão com o calcanhar."
    ],
    observacoes: "",
    tempoExecucao: "-",
    series: 3,
    repeticoes: "10 por lado",
    descanso: "45 segundos",
    nivel: "Intermediário",
  },
  {
    id: "reverse-lunge",
    nome: "Reverse Lunge",
    categoria: "Calistenia",
    grupoMuscular: "Glúteo Máximo",
    musculosSecundarios: ["Quadríceps", "Core"],
    objetivo: "Fortalecer pernas e glúteos com menor impacto sobre os joelhos.",
    beneficios: [
      "Excelente para iniciantes.",
      "Desenvolve estabilidade.",
      "Trabalha coordenação."
    ],
    explicacao: "",
    passoAPasso: [
      "Fique em pé.",
      "Dê um passo para trás.",
      "Flexione os dois joelhos.",
      "Empurre o chão com a perna da frente.",
      "Volte à posição inicial.",
      "Alterne as pernas."
    ],
    errosComuns: [
      "Inclinar o tronco.",
      "Passo muito curto.",
      "Joelho colapsando para dentro."
    ],
    dicas: [],
    observacoes: "",
    tempoExecucao: "-",
    series: 3,
    repeticoes: "12 por lado",
    descanso: "30 segundos",
    nivel: "Iniciante",
  },
  {
    id: "walking-lunge",
    nome: "Walking Lunge",
    categoria: "Calistenia",
    grupoMuscular: "Glúteo Máximo",
    musculosSecundarios: ["Quadríceps", "Posterior", "Core"],
    objetivo: "Melhorar força funcional e equilíbrio.",
    beneficios: [
      "Trabalha coordenação.",
      "Grande ativação muscular.",
      "Melhora estabilidade."
    ],
    explicacao: "",
    passoAPasso: [
      "Dê um passo à frente.",
      "Flexione ambos os joelhos.",
      "Empurre o chão.",
      "Continue caminhando.",
      "Mantenha postura ereta."
    ],
    errosComuns: [
      "Passos curtos.",
      "Tronco muito inclinado.",
      "Joelho ultrapassando exageradamente a ponta do pé."
    ],
    dicas: [],
    observacoes: "",
    tempoExecucao: "-",
    series: 3,
    repeticoes: "10 passos por lado",
    descanso: "40 segundos",
    nivel: "Intermediário",
  },
  {
    id: "step-up",
    nome: "Step Up",
    categoria: "Calistenia",
    grupoMuscular: "Glúteo Máximo",
    musculosSecundarios: ["Glúteo Médio", "Quadríceps"],
    objetivo: "Fortalecer glúteos através da subida em plataforma.",
    beneficios: [
      "Excelente ativação unilateral.",
      "Melhora equilíbrio.",
      "Desenvolve potência."
    ],
    explicacao: "",
    passoAPasso: [
      "Utilize um banco firme.",
      "Apoie um pé completamente.",
      "Empurre utilizando apenas essa perna.",
      "Suba totalmente.",
      "Desça lentamente."
    ],
    errosComuns: [
      "Impulsionar com a perna de baixo.",
      "Banco muito alto.",
      "Descer rapidamente."
    ],
    dicas: [],
    observacoes: "",
    tempoExecucao: "-",
    series: 3,
    repeticoes: "12 por lado",
    descanso: "35 segundos",
    nivel: "Intermediário",
  },
  {
    id: "single-leg-squat-assistido",
    nome: "Single Leg Squat Assistido",
    categoria: "Calistenia",
    grupoMuscular: "Glúteo Máximo",
    musculosSecundarios: ["Quadríceps", "Core"],
    objetivo: "Desenvolver força unilateral e controle corporal.",
    beneficios: [
      "Excelente equilíbrio.",
      "Corrige diferenças entre pernas.",
      "Melhora coordenação."
    ],
    explicacao: "",
    passoAPasso: [
      "Apoie-se levemente em uma parede ou cadeira.",
      "Levante uma perna.",
      "Agache utilizando apenas a outra.",
      "Desça lentamente.",
      "Retorne controlando."
    ],
    errosComuns: [
      "Joelho entrando para dentro.",
      "Perder equilíbrio.",
      "Movimento muito rápido."
    ],
    dicas: [],
    observacoes: "",
    tempoExecucao: "-",
    series: 3,
    repeticoes: "8 por lado",
    descanso: "40 segundos",
    nivel: "Avançado",
  },
  {
    id: "hip-airplane",
    nome: "Hip Airplane",
    categoria: "Calistenia",
    grupoMuscular: "Glúteo Médio",
    musculosSecundarios: ["Glúteo Máximo", "Core"],
    objetivo: "Melhorar estabilidade do quadril.",
    beneficios: [
      "Excelente controle motor.",
      "Fortalece estabilizadores.",
      "Melhora equilíbrio."
    ],
    explicacao: "",
    passoAPasso: [
      "Apoie-se em apenas uma perna.",
      "Incline o tronco à frente.",
      "Abra lentamente o quadril.",
      "Feche novamente.",
      "Retorne."
    ],
    errosComuns: [
      "Girar o corpo inteiro.",
      "Perder equilíbrio.",
      "Movimento rápido."
    ],
    dicas: [],
    observacoes: "",
    tempoExecucao: "-",
    series: 2,
    repeticoes: "8 por lado",
    descanso: "40 segundos",
    nivel: "Avançado",
  },
  {
    id: "skater-squat",
    nome: "Skater Squat",
    categoria: "Calistenia",
    grupoMuscular: "Glúteo Máximo",
    musculosSecundarios: ["Quadríceps", "Core"],
    objetivo: "Fortalecer cada perna individualmente.",
    beneficios: [
      "Grande ativação muscular.",
      "Melhora estabilidade.",
      "Desenvolve força funcional."
    ],
    explicacao: "",
    passoAPasso: [
      "Apoie apenas uma perna.",
      "Leve a outra para trás.",
      "Flexione lentamente.",
      "Retorne utilizando o calcanhar."
    ],
    errosComuns: [
      "Perder equilíbrio.",
      "Inclinar excessivamente o tronco."
    ],
    dicas: [],
    observacoes: "",
    tempoExecucao: "-",
    series: 3,
    repeticoes: "8 por lado",
    descanso: "45 segundos",
    nivel: "Intermediário",
  },
  {
    id: "curtsy-lunge",
    nome: "Curtsy Lunge",
    categoria: "Calistenia",
    grupoMuscular: "Glúteo Médio",
    musculosSecundarios: ["Glúteo Máximo", "Quadríceps"],
    objetivo: "Fortalecer a lateral dos glúteos.",
    beneficios: [
      "Trabalha estabilidade.",
      "Excelente para glúteo médio.",
      "Desenvolve coordenação."
    ],
    explicacao: "",
    passoAPasso: [
      "Cruze uma perna atrás da outra.",
      "Flexione lentamente.",
      "Retorne.",
      "Alterne."
    ],
    errosComuns: [
      "Cruzar demais.",
      "Inclinar o tronco.",
      "Movimento rápido."
    ],
    dicas: [],
    observacoes: "",
    tempoExecucao: "-",
    series: 3,
    repeticoes: "12 por lado",
    descanso: "30 segundos",
    nivel: "Intermediário",
  },
  {
    id: "wall-sit-abducao",
    nome: "Wall Sit + Abdução",
    categoria: "Calistenia",
    grupoMuscular: "Glúteo Médio",
    musculosSecundarios: ["Quadríceps"],
    objetivo: "Desenvolver resistência dos glúteos e pernas.",
    beneficios: [
      "Grande tempo sob tensão.",
      "Excelente finalizador.",
      "Fortalece estabilizadores."
    ],
    explicacao: "",
    passoAPasso: [
      "Apoie as costas na parede.",
      "Flexione os joelhos até aproximadamente 90° (ou até uma amplitude confortável).",
      "Mantenha a posição.",
      "Abra e feche os joelhos lentamente.",
      "Continue durante todo o tempo."
    ],
    errosComuns: [
      "Subir durante o exercício.",
      "Fechar completamente os joelhos.",
      "Relaxar o abdômen."
    ],
    dicas: [],
    observacoes: "",
    tempoExecucao: "40 segundos",
    series: 3,
    repeticoes: "-",
    descanso: "30 segundos",
    nivel: "Intermediário",
  },
  {
    id: "single-leg-romanian-deadlift",
    nome: "Single Leg Romanian Deadlift",
    categoria: "Calistenia",
    grupoMuscular: "Glúteo Máximo",
    musculosSecundarios: ["Posterior de Coxa", "Core"],
    objetivo: "Melhorar equilíbrio, estabilidade e fortalecimento unilateral.",
    beneficios: [
      "Excelente ativação dos glúteos.",
      "Trabalha equilíbrio.",
      "Fortalece cadeia posterior.",
      "Desenvolve coordenação."
    ],
    explicacao: "",
    passoAPasso: [
      "Apoie apenas uma perna no chão.",
      "Flexione levemente o joelho de apoio.",
      "Incline lentamente o tronco para frente.",
      "Estenda a outra perna para trás.",
      "Mantenha a coluna neutra.",
      "Retorne contraindo o glúteo da perna de apoio."
    ],
    errosComuns: [
      "Arredondar a coluna.",
      "Girar o quadril.",
      "Fazer o movimento rapidamente.",
      "Perder o alinhamento do tronco."
    ],
    dicas: [
      "Imagine formar uma linha reta entre cabeça, tronco e perna elevada.",
      "Vá apenas até onde conseguir manter boa postura."
    ],
    observacoes: "",
    tempoExecucao: "-",
    series: 3,
    repeticoes: "10 por lado",
    descanso: "35 segundos",
    nivel: "Intermediário",
  },
  {
    id: "hip-thrust",
    nome: "Hip Thrust",
    categoria: "Musculação",
    grupoMuscular: "Glúteo Máximo",
    musculosSecundarios: ["Posterior de Coxa", "Core"],
    objetivo: "Desenvolver força, volume e projeção dos glúteos.",
    beneficios: [
      "Excelente ativação do glúteo máximo.",
      "Aumenta força e potência.",
      "Melhora estabilidade do quadril.",
      "Excelente para hipertrofia quando realizado com progressão de carga."
    ],
    explicacao: "",
    passoAPasso: [
      "Apoie as costas em um banco ou sofá firme.",
      "Posicione os pés na largura dos quadris.",
      "Apoie o peso sobre o quadril (caso utilize carga).",
      "Contraia o abdômen.",
      "Empurre os calcanhares contra o chão.",
      "Eleve o quadril até formar uma linha entre joelhos, quadris e ombros.",
      "Contraia os glúteos por aproximadamente 2 segundos.",
      "Retorne lentamente sem deixar o quadril despencar."
    ],
    errosComuns: [
      "Arquear excessivamente a lombar.",
      "Empurrar utilizando a ponta dos pés.",
      "Não atingir amplitude suficiente.",
      "Fazer o movimento rapidamente."
    ],
    dicas: [
      "Pense em 'esmagar uma moeda' entre os glúteos no topo.",
      "Controle tanto a subida quanto a descida."
    ],
    observacoes: "Equipamentos opcionais: Caso você não possua halteres, utilize uma mochila com livros, garrafas de água, sacos de arroz ou outros objetos seguros para adicionar resistência aos exercícios. O foco é manter a técnica correta antes de aumentar a carga.",
    tempoExecucao: "-",
    series: 3,
    repeticoes: "12",
    descanso: "45 segundos",
    nivel: "Iniciante",
  },
  {
    id: "romanian-deadlift",
    nome: "Romanian Deadlift",
    categoria: "Musculação",
    grupoMuscular: "Glúteo Máximo",
    musculosSecundarios: ["Posterior de Coxa", "Lombar", "Core"],
    objetivo: "Fortalecer toda a cadeia posterior.",
    beneficios: [
      "Excelente alongamento dos glúteos.",
      "Desenvolve força.",
      "Melhora postura.",
      "Aumenta estabilidade."
    ],
    explicacao: "",
    passoAPasso: [
      "Segure halteres ou mochila.",
      "Flexione levemente os joelhos.",
      "Empurre o quadril para trás.",
      "Desça mantendo a coluna neutra.",
      "Quando sentir alongar a parte posterior da coxa, retorne contraindo os glúteos."
    ],
    errosComuns: [
      "Arredondar a coluna.",
      "Dobrar demais os joelhos.",
      "Descer além da mobilidade."
    ],
    dicas: [],
    observacoes: "",
    tempoExecucao: "-",
    series: 3,
    repeticoes: "12",
    descanso: "45 segundos",
    nivel: "Intermediário",
  },
  {
    id: "goblet-squat",
    nome: "Goblet Squat",
    categoria: "Musculação",
    grupoMuscular: "Glúteo Máximo",
    musculosSecundarios: ["Quadríceps", "Core"],
    objetivo: "Fortalecer glúteos e pernas.",
    beneficios: [
      "Excelente para iniciantes.",
      "Fácil aprendizado.",
      "Melhora mobilidade."
    ],
    explicacao: "",
    passoAPasso: [
      "Segure um halter ou mochila junto ao peito.",
      "Afaste os pés na largura dos ombros.",
      "Flexione joelhos e quadris simultaneamente.",
      "Desça até uma amplitude confortável.",
      "Empurre o chão utilizando os calcanhares."
    ],
    errosComuns: [
      "Joelhos entrando para dentro.",
      "Inclinar demais o tronco.",
      "Tirar os calcanhares do chão."
    ],
    dicas: [],
    observacoes: "",
    tempoExecucao: "-",
    series: 3,
    repeticoes: "12",
    descanso: "40 segundos",
    nivel: "Iniciante",
  },
  {
    id: "sumo-squat",
    nome: "Sumo Squat",
    categoria: "Musculação",
    grupoMuscular: "Glúteo Máximo",
    musculosSecundarios: ["Adutores", "Quadríceps"],
    objetivo: "Dar maior ênfase aos glúteos através de uma base mais aberta.",
    beneficios: [
      "Excelente amplitude.",
      "Trabalha glúteos e parte interna da coxa.",
      "Fácil progressão."
    ],
    explicacao: "",
    passoAPasso: [
      "Afaste bastante os pés.",
      "Aponte as pontas dos pés levemente para fora.",
      "Segure um peso à frente do corpo.",
      "Agache lentamente.",
      "Empurre o chão para retornar."
    ],
    errosComuns: [
      "Inclinar demais o tronco.",
      "Fechar os joelhos.",
      "Fazer movimentos rápidos."
    ],
    dicas: [],
    observacoes: "",
    tempoExecucao: "-",
    series: 3,
    repeticoes: "12",
    descanso: "40 segundos",
    nivel: "Intermediário",
  },
  {
    id: "glute-bridge-com-carga",
    nome: "Glute Bridge com Carga",
    categoria: "Musculação",
    grupoMuscular: "Glúteo Máximo",
    musculosSecundarios: ["Posterior de Coxa"],
    objetivo: "Aumentar a intensidade da ponte tradicional.",
    beneficios: [
      "Excelente para evolução.",
      "Maior sobrecarga.",
      "Grande ativação muscular."
    ],
    explicacao: "",
    passoAPasso: [
      "Deite de costas.",
      "Apoie um peso sobre o quadril.",
      "Flexione os joelhos.",
      "Eleve lentamente o quadril.",
      "Contraia os glúteos por 2 segundos.",
      "Retorne controladamente."
    ],
    errosComuns: [
      "Arquear a lombar.",
      "Relaxar no topo.",
      "Movimento muito rápido."
    ],
    dicas: [],
    observacoes: "",
    tempoExecucao: "-",
    series: 3,
    repeticoes: "15",
    descanso: "35 segundos",
    nivel: "Intermediário",
  },
  {
    id: "hip-abduction-com-miniband",
    nome: "Hip Abduction com Miniband",
    categoria: "Musculação",
    grupoMuscular: "Glúteo Médio",
    musculosSecundarios: ["Glúteo Mínimo"],
    objetivo: "Fortalecer a musculatura lateral dos glúteos.",
    beneficios: [
      "Excelente ativação do glúteo médio.",
      "Melhora estabilidade.",
      "Fácil de executar."
    ],
    explicacao: "",
    passoAPasso: [
      "Coloque a miniband acima dos joelhos.",
      "Flexione levemente os joelhos.",
      "Afaste lentamente as pernas contra a resistência.",
      "Retorne controladamente."
    ],
    errosComuns: [
      "Abrir muito rápido.",
      "Relaxar completamente o elástico.",
      "Inclinar o tronco."
    ],
    dicas: [],
    observacoes: "",
    tempoExecucao: "-",
    series: 3,
    repeticoes: "20",
    descanso: "25 segundos",
    nivel: "Iniciante",
  },
  {
    id: "kickback-com-elastico",
    nome: "Kickback com elástico",
    categoria: "Musculação",
    grupoMuscular: "Glúteo Máximo",
    musculosSecundarios: ["Core"],
    objetivo: "Melhorar a extensão do quadril utilizando resistência.",
    beneficios: [
      "Excelente contração.",
      "Fácil progressão.",
      "Baixo impacto."
    ],
    explicacao: "",
    passoAPasso: [
      "Prenda o elástico em um ponto fixo.",
      "Posicione-o no tornozelo.",
      "Estenda a perna para trás.",
      "Contraia os glúteos.",
      "Retorne lentamente."
    ],
    errosComuns: [
      "Arquear a lombar.",
      "Girar o quadril.",
      "Fazer impulso."
    ],
    dicas: [],
    observacoes: "",
    tempoExecucao: "-",
    series: 3,
    repeticoes: "15 por lado",
    descanso: "30 segundos",
    nivel: "Intermediário",
  },
  {
    id: "b-stance-hip-thrust",
    nome: "B-Stance Hip Thrust",
    categoria: "Musculação",
    grupoMuscular: "Glúteo Máximo",
    musculosSecundarios: ["Posterior de Coxa"],
    objetivo: "Dar maior ênfase a um lado do corpo.",
    beneficios: [
      "Corrige desequilíbrios.",
      "Grande ativação unilateral.",
      "Excelente progressão."
    ],
    explicacao: "",
    passoAPasso: [
      "Posicione um pé à frente e outro ligeiramente mais afastado.",
      "Apoie as costas em um banco.",
      "A maior parte da força deve ser feita pela perna da frente.",
      "Eleve o quadril.",
      "Contraia os glúteos.",
      "Retorne lentamente."
    ],
    errosComuns: [
      "Empurrar igualmente com as duas pernas.",
      "Arquear a lombar.",
      "Subir rapidamente."
    ],
    dicas: [],
    observacoes: "",
    tempoExecucao: "-",
    series: 3,
    repeticoes: "12 por lado",
    descanso: "40 segundos",
    nivel: "Intermediário",
  },
  {
    id: "b-stance-romanian-deadlift",
    nome: "B-Stance Romanian Deadlift",
    categoria: "Musculação",
    grupoMuscular: "Glúteo Máximo",
    musculosSecundarios: ["Posterior de Coxa"],
    objetivo: "Fortalecer unilateralmente a cadeia posterior.",
    beneficios: [
      "Excelente estabilidade.",
      "Grande amplitude.",
      "Corrige diferenças musculares."
    ],
    explicacao: "",
    passoAPasso: [
      "Posicione um pé ligeiramente atrás do outro.",
      "A maior parte do peso permanece na perna da frente.",
      "Empurre o quadril para trás.",
      "Desça lentamente.",
      "Retorne utilizando os glúteos."
    ],
    errosComuns: [
      "Transferir peso para a perna traseira.",
      "Arredondar a coluna.",
      "Fazer o movimento rapidamente."
    ],
    dicas: [],
    observacoes: "",
    tempoExecucao: "-",
    series: 3,
    repeticoes: "10 por lado",
    descanso: "40 segundos",
    nivel: "Intermediário",
  },
  {
    id: "frog-pumps-com-carga",
    nome: "Frog Pumps com Carga",
    categoria: "Musculação",
    grupoMuscular: "Glúteo Máximo",
    musculosSecundarios: ["Adutores"],
    objetivo: "Finalizar o treino com alta ativação dos glúteos.",
    beneficios: [
      "Excelente tempo sob tensão.",
      "Grande contração muscular.",
      "Fácil execução."
    ],
    explicacao: "",
    passoAPasso: [
      "Deite de costas.",
      "Una as solas dos pés.",
      "Apoie um peso sobre o quadril.",
      "Eleve o quadril.",
      "Contraia os glúteos.",
      "Retorne parcialmente, mantendo tensão contínua."
    ],
    errosComuns: [
      "Descer completamente.",
      "Relaxar entre as repetições.",
      "Fazer movimentos rápidos."
    ],
    dicas: [
      "Mantenha tensão constante durante toda a série.",
      "Priorize a qualidade da contração em vez da velocidade."
    ],
    observacoes: "",
    tempoExecucao: "-",
    series: 3,
    repeticoes: "20",
    descanso: "30 segundos",
    nivel: "Intermediário",
  }
];
