export const user = {
  name: 'Natan Silva',
  firstName: 'Natan',
  email: 'natan.silva@email.com',
  avatar: null,
  balance: 12458.73,
  accountNumber: '**** 4829',
};

export const quickActions = [
  { id: '1', icon: 'qr-code', label: 'PIX', color: '#D4AF37' },
  { id: '2', icon: 'swap-horizontal', label: 'Transferir', color: '#F5D76E' },
  { id: '3', icon: 'barcode', label: 'Pagar', color: '#B8941F' },
  { id: '4', icon: 'receipt', label: 'Extrato', color: '#8B9DC3' },
];

export const services = [
  {
    id: '1',
    icon: 'wallet',
    name: 'Conta Digital',
    description: 'Conta 100% gratuita, sem tarifas escondidas e com rendimento automático.',
    color: '#D4AF37',
  },
  {
    id: '2',
    icon: 'flash',
    name: 'PIX',
    description: 'Transferências instantâneas 24h por dia, todos os dias da semana.',
    color: '#10B981',
  },
  {
    id: '3',
    icon: 'card',
    name: 'Cartão Virtual',
    description: 'Cartão de crédito virtual com cashback em todas as compras.',
    color: '#F5D76E',
  },
  {
    id: '4',
    icon: 'trending-up',
    name: 'Investimentos',
    description: 'Aplique seu dinheiro com segurança e acompanhe em tempo real.',
    color: '#3B82F6',
  },
  {
    id: '5',
    icon: 'cash',
    name: 'Empréstimos',
    description: 'Crédito pessoal com taxas competitivas e aprovação rápida.',
    color: '#996515',
  },
  {
    id: '6',
    icon: 'gift',
    name: 'Cashback',
    description: 'Ganhe dinheiro de volta em compras selecionadas todos os meses.',
    color: '#D4AF37',
  },
];

export const companyInfo = {
  name: 'starbank',
  slogan: 'UM BANCO PARA O SEU FUTURO',
  founded: '2023',
  history:
    'Fundada em 2023 por um grupo de empreendedores apaixonados por tecnologia financeira, a Starbank nasceu com a missão de democratizar o acesso a serviços bancários de qualidade. Em pouco tempo, conquistamos milhares de clientes que buscam uma experiência bancária moderna, transparente e sem burocracia.',
  mission:
    'Transformar a relação das pessoas com o dinheiro, oferecendo soluções financeiras simples, acessíveis e inovadoras.',
  vision:
    'Ser a fintech mais amada do Brasil, reconhecida pela excelência no atendimento e pela inovação constante.',
  values: [
    { icon: 'shield-checkmark', title: 'Transparência', description: 'Sem letras miúdas ou taxas escondidas.' },
    { icon: 'rocket', title: 'Inovação', description: 'Tecnologia de ponta a serviço do cliente.' },
    { icon: 'people', title: 'Acessibilidade', description: 'Finanças para todos, sem exclusão.' },
    { icon: 'heart', title: 'Empatia', description: 'Entendemos e cuidamos de cada cliente.' },
  ],
  differentiators: [
    'Conta 100% gratuita, sem mensalidade',
    'Cashback de até 5% em compras',
    'Atendimento humanizado 24/7',
    'Investimentos a partir de R$ 1,00',
    'Cartão virtual instantâneo',
  ],
};

export const profileSettings = [
  { id: '1', icon: 'person-outline', label: 'Dados pessoais', section: 'Conta' },
  { id: '2', icon: 'lock-closed-outline', label: 'Segurança', section: 'Conta' },
  { id: '3', icon: 'notifications-outline', label: 'Notificações', section: 'Preferências', toggle: true },
  { id: '4', icon: 'moon-outline', label: 'Modo escuro', section: 'Preferências', themeToggle: true },
  { id: '5', icon: 'help-circle-outline', label: 'Ajuda e suporte', section: 'Suporte' },
  { id: '6', icon: 'document-text-outline', label: 'Termos de uso', section: 'Suporte' },
];

export const recentTransactions = [
  { id: '1', title: 'PIX recebido', amount: 350.0, type: 'credit', date: 'Hoje, 14:32' },
  { id: '2', title: 'Supermercado Extra', amount: -89.45, type: 'debit', date: 'Hoje, 10:15' },
  { id: '3', title: 'Transferência enviada', amount: -200.0, type: 'debit', date: 'Ontem, 18:40' },
];
