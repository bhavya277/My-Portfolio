import { LabExperiment } from '../types';

export const labExperimentsData: LabExperiment[] = [
  {
    id: 'bpe-tokenizer',
    title: 'Interactive Subword Tokenizer Explorer',
    category: 'NLP / Tokenizer',
    status: 'live',
    description: 'Visualize how raw natural language text is split into subword tokens, token IDs, and character offsets similar to GPT Byte-Pair Encoding (BPE).',
    technicalConcept: 'Subword Tokenization (BPE/WordPiece) preserves vocabulary size while handling out-of-vocabulary compounds and prefixes.',
    interactiveType: 'tokenizer-sim',
  },
  {
    id: 'neural-activations',
    title: 'Neural Activation Function Sandbox',
    category: 'Neural Nets',
    status: 'live',
    description: 'Compare non-linear activation functions (ReLU, Leaky ReLU, Sigmoid, Tanh, GELU) and observe their mathematical gradients and vanishing gradient tendencies.',
    technicalConcept: 'Non-linear activations enable multi-layer perceptrons to learn complex non-linear boundary manifolds in high dimensions.',
    interactiveType: 'activation-sim',
  },
  {
    id: 'security-headers',
    title: 'HTTP Security Header Checklist & Evaluator',
    category: 'Cybersecurity',
    status: 'live',
    description: 'Inspect essential HTTP security response headers (CSP, HSTS, X-Frame-Options, Permissions-Policy) to evaluate web defense posture.',
    technicalConcept: 'Defense-in-depth header configurations mitigate XSS, Clickjacking, and protocol downgrade vectors.',
    interactiveType: 'security-header-checker',
  },
  {
    id: 'attention-matrix-vis',
    title: 'Transformer Self-Attention Heatmap Explorer',
    category: 'NLP / Tokenizer',
    status: 'coming-soon',
    description: 'Interactive query-key-value dot-product attention weight visualizer across multi-head self-attention layers.',
    technicalConcept: 'Scaled dot-product attention computes token contextuality across all sequence tokens simultaneously.',
    interactiveType: 'custom',
  },
];
