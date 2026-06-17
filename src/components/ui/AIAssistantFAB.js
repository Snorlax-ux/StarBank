import { useState } from 'react';
import {
  View,
  Modal,
  StyleSheet,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '../../context/ThemeContext';
import { radius, spacing, shadows } from '../../theme';
import PressableScale from './PressableScale';
import Text from './Text';
import FadeInView from './FadeInView';

const AI_RESPONSES = {
  saldo: 'Seu saldo disponível é R$ 12.458,73. Posso ajudar com mais alguma coisa?',
  pix: 'Para fazer um PIX, acesse a aba Início e toque em PIX. Você pode usar chave, QR Code ou copia e cola.',
  cartao: 'Seu cartão virtual Starbank Visa termina em 4829, válido até 12/28. Cashback de 5% ativo!',
  investimento: 'Temos CDB, Tesouro Direto e fundos a partir de R$ 1,00. Acesse Serviços > Investimentos.',
  default:
    'Sou a Star AI, assistente inteligente da Starbank. Posso ajudar com saldo, PIX, cartão, investimentos e muito mais!',
};

function getAIResponse(message) {
  const lower = message.toLowerCase();
  if (lower.includes('saldo')) return AI_RESPONSES.saldo;
  if (lower.includes('pix')) return AI_RESPONSES.pix;
  if (lower.includes('cart') || lower.includes('cartão')) return AI_RESPONSES.cartao;
  if (lower.includes('invest')) return AI_RESPONSES.investimento;
  return AI_RESPONSES.default;
}

export default function AIAssistantFAB() {
  const { theme } = useTheme();
  const insets = useSafeAreaInsets();
  const [visible, setVisible] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      id: '0',
      role: 'assistant',
      text: 'Olá! Sou a Star AI, criada com inteligência artificial para te ajudar. Como posso ajudar hoje?',
    },
  ]);

  const sendMessage = () => {
    if (!input.trim()) return;
    const userMsg = { id: Date.now().toString(), role: 'user', text: input.trim() };
    const aiMsg = {
      id: (Date.now() + 1).toString(),
      role: 'assistant',
      text: getAIResponse(input),
    };
    setMessages((prev) => [...prev, userMsg, aiMsg]);
    setInput('');
  };

  return (
    <>
      <PressableScale
        onPress={() => setVisible(true)}
        style={[styles.fab, { bottom: insets.bottom + 80 }, shadows.gold]}
      >
        <View style={[styles.fabInner, { backgroundColor: theme.gold }]}>
          <Ionicons name="sparkles" size={24} color={theme.background} />
        </View>
      </PressableScale>

      <Modal visible={visible} animationType="slide" transparent onRequestClose={() => setVisible(false)}>
        <KeyboardAvoidingView
          style={styles.modalOverlay}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
          <View style={[styles.modal, { backgroundColor: theme.backgroundCard, paddingBottom: insets.bottom + 12 }]}>
            <View style={styles.modalHeader}>
              <View style={styles.aiBadge}>
                <Ionicons name="sparkles" size={18} color={theme.gold} />
                <Text variant="h3" color="gold">Star AI</Text>
              </View>
              <PressableScale onPress={() => setVisible(false)} haptic={false}>
                <Ionicons name="close" size={24} color={theme.textSecondary} />
              </PressableScale>
            </View>

            <ScrollView style={styles.messages} contentContainerStyle={styles.messagesContent}>
              {messages.map((msg, index) => (
                <FadeInView key={msg.id} delay={index * 50} from="bottom" distance={12}>
                  <View
                    style={[
                      styles.messageBubble,
                      msg.role === 'user'
                        ? [styles.userBubble, { backgroundColor: theme.gold + '25' }]
                        : [styles.aiBubble, { backgroundColor: theme.surface }],
                    ]}
                  >
                    <Text variant="bodySmall" color={msg.role === 'user' ? 'gold' : 'primary'}>
                      {msg.text}
                    </Text>
                  </View>
                </FadeInView>
              ))}
            </ScrollView>

            <View style={[styles.inputRow, { borderColor: theme.border, backgroundColor: theme.background }]}>
              <TextInput
                style={[styles.input, { color: theme.text }]}
                placeholder="Pergunte sobre saldo, PIX..."
                placeholderTextColor={theme.textMuted}
                value={input}
                onChangeText={setInput}
                onSubmitEditing={sendMessage}
              />
              <PressableScale onPress={sendMessage}>
                <View style={[styles.sendBtn, { backgroundColor: theme.gold }]}>
                  <Ionicons name="send" size={18} color={theme.background} />
                </View>
              </PressableScale>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    right: 20,
    zIndex: 100,
  },
  fabInner: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  modal: {
    borderTopLeftRadius: radius.xxl,
    borderTopRightRadius: radius.xxl,
    maxHeight: '80%',
    paddingTop: spacing.lg,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.xl,
    marginBottom: spacing.lg,
  },
  aiBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  messages: {
    maxHeight: 360,
  },
  messagesContent: {
    paddingHorizontal: spacing.xl,
    gap: 10,
    paddingBottom: spacing.lg,
  },
  messageBubble: {
    borderRadius: radius.lg,
    padding: spacing.lg,
    maxWidth: '85%',
  },
  userBubble: {
    alignSelf: 'flex-end',
  },
  aiBubble: {
    alignSelf: 'flex-start',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: spacing.xl,
    borderRadius: radius.lg,
    borderWidth: 1,
    paddingLeft: spacing.lg,
    paddingRight: spacing.sm,
    paddingVertical: spacing.sm,
    gap: spacing.sm,
  },
  input: {
    flex: 1,
    fontSize: 15,
    paddingVertical: spacing.sm,
  },
  sendBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
