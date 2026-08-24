import React, { useState } from 'react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Terminal, Cpu, Shield, Sparkles, CheckCircle2, AlertCircle } from 'lucide-react';

export const LabPage: React.FC = () => {
  // Tokenizer State
  const [inputText, setInputText] = useState('Machine learning pipelines transform unstructured natural language into high-dimensional embedding vectors.');
  
  // Activation State
  const [selectedActivation, setSelectedActivation] = useState<'relu' | 'sigmoid' | 'tanh' | 'leaky-relu' | 'gelu'>('relu');
  const [inputValue, setInputValue] = useState<number>(0.5);

  // Security Checklist State
  const [headersChecked, setHeadersChecked] = useState<{ [key: string]: boolean }>({
    'Content-Security-Policy': true,
    'Strict-Transport-Security': true,
    'X-Frame-Options': true,
    'X-Content-Type-Options': true,
    'Referrer-Policy': false,
    'Permissions-Policy': false,
  });

  // Tokenizer simulation logic
  const simulateTokens = (text: string) => {
    const words = text.trim().split(/\s+/);
    const tokens: { text: string; id: number }[] = [];
    let idCounter = 101;

    words.forEach((word) => {
      if (word.length > 7) {
        const mid = Math.floor(word.length / 2);
        tokens.push({ text: word.slice(0, mid), id: idCounter++ });
        tokens.push({ text: '##' + word.slice(mid), id: idCounter++ });
      } else {
        tokens.push({ text: word, id: idCounter++ });
      }
    });

    return tokens;
  };

  const currentTokens = simulateTokens(inputText);

  // Activation Math
  const computeActivation = (fn: string, x: number) => {
    switch (fn) {
      case 'relu':
        return {
          formula: 'f(x) = max(0, x)',
          val: Math.max(0, x).toFixed(4),
          grad: (x > 0 ? 1 : 0).toFixed(4),
          desc: 'Fast compute, prone to dying ReLU problem when negative.',
        };
      case 'sigmoid': {
        const sig = 1 / (1 + Math.exp(-x));
        return {
          formula: 'f(x) = 1 / (1 + e^(-x))',
          val: sig.toFixed(4),
          grad: (sig * (1 - sig)).toFixed(4),
          desc: 'Outputs in (0, 1), suffers from vanishing gradients at extreme values.',
        };
      }
      case 'tanh': {
        const th = Math.tanh(x);
        return {
          formula: 'f(x) = tanh(x)',
          val: th.toFixed(4),
          grad: (1 - th * th).toFixed(4),
          desc: 'Zero-centered output in (-1, 1), improved convergence over sigmoid.',
        };
      }
      case 'leaky-relu':
        return {
          formula: 'f(x) = max(0.01x, x)',
          val: (x > 0 ? x : 0.01 * x).toFixed(4),
          grad: (x > 0 ? 1 : 0.01).toFixed(4),
          desc: 'Prevents dead neurons by allowing a small constant gradient for x < 0.',
        };
      case 'gelu': {
        const g = 0.5 * x * (1 + Math.tanh(Math.sqrt(2 / Math.PI) * (x + 0.044715 * Math.pow(x, 3))));
        return {
          formula: 'f(x) = x * P(X <= x)',
          val: g.toFixed(4),
          grad: 'Dynamic probabilistic curve',
          desc: 'Smooth non-monotonic curvature; standard activation in modern Transformers (BERT, GPT).',
        };
      }
      default:
        return { formula: '', val: '0', grad: '0', desc: '' };
    }
  };

  const activationResult = computeActivation(selectedActivation, inputValue);

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        label="TECHNICAL SANDBOX"
        title="Interactive Engineering Lab"
        description="Interactive micro-tools and algorithmic demonstrations exploring NLP tokenization, neural activation manifolds, and HTTP defense postures."
      />

      <div className="space-y-12">
        {/* Experiment 1: BPE / Subword Tokenizer */}
        <Card variant="highlight" className="p-6 md:p-8 space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-border-dark">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-primary-950/60 border border-primary-800 text-primary-400">
                <Terminal className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">
                  Interactive Subword Tokenizer Explorer
                </h3>
                <span className="text-xs font-mono text-primary-300">
                  Concept: Byte-Pair Encoding (BPE) & WordPiece Decomposition
                </span>
              </div>
            </div>
            <Badge variant="success" size="sm">
              Live Interactive Demo
            </Badge>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">
            Type any sentence to see how natural language strings are parsed into subword tokens and numeric token IDs prior to embedding matrix lookup.
          </p>

          <div className="space-y-2">
            <label className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Input String:
            </label>
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-lg p-3 text-xs font-mono text-slate-100 focus:outline-none focus:border-primary-500 transition-colors"
            />
          </div>

          {/* Tokens Display */}
          <div className="p-4 rounded-xl bg-slate-955/80 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Parsed Tokens: {currentTokens.length}</span>
              <span>Encoding Type: Simulated Subword BPE</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {currentTokens.map((tok, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center px-2.5 py-1.5 rounded bg-slate-900 border border-slate-800 text-xs font-mono"
                >
                  <span className="text-primary-300 font-bold">{tok.text}</span>
                  <span className="text-[10px] text-slate-400">id:{tok.id}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Experiment 2: Neural Activations */}
        <Card variant="default" className="p-6 md:p-8 space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-border-dark">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-cyan-950/60 border border-cyan-800 text-cyan-400">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">
                  Neural Activation Function Sandbox
                </h3>
                <span className="text-xs font-mono text-cyan-300">
                  Concept: Non-Linearity & Mathematical Gradient Derivatives
                </span>
              </div>
            </div>
            <Badge variant="accent" size="sm">
              Mathematical Sandbox
            </Badge>
          </div>

          <div className="flex flex-wrap gap-2">
            {(['relu', 'sigmoid', 'tanh', 'leaky-relu', 'gelu'] as const).map((fn) => (
              <button
                key={fn}
                onClick={() => setSelectedActivation(fn)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium uppercase transition-colors ${
                  selectedActivation === fn
                    ? 'bg-cyan-600 text-white'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {fn}
              </button>
            ))}
          </div>

          {/* Slider for Input X */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono text-slate-400">
              <span>Input Value (x): {inputValue}</span>
              <span>Range: [-5.0, 5.0]</span>
            </div>
            <input
              type="range"
              min="-5"
              max="5"
              step="0.1"
              value={inputValue}
              onChange={(e) => setInputValue(parseFloat(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
            />
          </div>

          {/* Output Display */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-slate-900/80 border border-slate-800">
              <span className="text-[11px] font-mono text-slate-400 uppercase">Formula</span>
              <p className="text-xs font-mono text-cyan-300 font-bold mt-1">
                {activationResult.formula}
              </p>
            </div>
            <div className="p-4 rounded-lg bg-slate-900/80 border border-slate-800">
              <span className="text-[11px] font-mono text-slate-400 uppercase">Output f(x)</span>
              <p className="text-base font-mono text-white font-bold mt-1">
                {activationResult.val}
              </p>
            </div>
            <div className="p-4 rounded-lg bg-slate-900/80 border border-slate-800">
              <span className="text-[11px] font-mono text-slate-400 uppercase">Gradient f'(x)</span>
              <p className="text-xs font-mono text-emerald-300 font-bold mt-1">
                {activationResult.grad}
              </p>
            </div>
          </div>

          <p className="text-xs text-slate-400 italic">
            {activationResult.desc}
          </p>
        </Card>

        {/* Experiment 3: HTTP Security Header Checklist */}
        <Card variant="default" className="p-6 md:p-8 space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-border-dark">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-emerald-950/60 border border-emerald-800 text-emerald-400">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">
                  HTTP Security Header Checklist & Evaluator
                </h3>
                <span className="text-xs font-mono text-emerald-300">
                  Concept: Defense-in-Depth & Header Hardening
                </span>
              </div>
            </div>
            <Badge variant="success" size="sm">
              Security Tool
            </Badge>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">
            Essential HTTP security headers required for production web endpoints to mitigate XSS, Clickjacking, MIME sniffing, and SSL downgrade attacks.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {Object.entries(headersChecked).map(([header, checked]) => (
              <div
                key={header}
                onClick={() => setHeadersChecked((prev) => ({ ...prev, [header]: !prev[header] }))}
                className={`p-3.5 rounded-lg border flex items-start gap-3 cursor-pointer transition-colors ${
                  checked
                    ? 'bg-emerald-950/20 border-emerald-800/60 text-slate-200'
                    : 'bg-slate-900/50 border-slate-800 text-slate-400'
                }`}
              >
                <div className={`p-1 rounded ${checked ? 'text-emerald-400' : 'text-slate-500'}`}>
                  {checked ? <CheckCircle2 className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold text-white">{header}</h4>
                  <span className="text-[10px] text-slate-400">
                    Status: {checked ? 'Enforced & Protected' : 'Not Configured (Vulnerable)'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Planned / Future Experiments State (Refinement #13) */}
        <div className="p-6 rounded-xl border border-dashed border-slate-800 bg-slate-900/30 text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono text-primary-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Future Prototypes in Development</span>
          </div>
          <h4 className="text-sm font-semibold text-slate-200">
            Transformer Multi-Head Self-Attention Matrix Visualizer
          </h4>
          <p className="text-xs text-slate-400 max-w-md mx-auto">
            Currently implementing an interactive scaled dot-product attention heatmap explorer for inspecting cross-token weights in real time.
          </p>
        </div>
      </div>
    </div>
  );
};
