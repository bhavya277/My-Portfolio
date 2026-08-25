import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  Download, 
  Calendar, 
  Award, 
  Building,
  Tag
} from 'lucide-react';
import { CertificationItem } from '../../types';

interface CertificateModalProps {
  certificate: CertificationItem | null;
  certificatesList: CertificationItem[];
  onClose: () => void;
  onNavigate: (cert: CertificationItem) => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  certificate,
  certificatesList,
  onClose,
  onNavigate,
}) => {
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  // Find index of current certificate
  const currentIndex = certificate
    ? certificatesList.findIndex((c) => c.id === certificate.id)
    : -1;

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      setZoomLevel(1);
      onNavigate(certificatesList[currentIndex - 1]);
    } else if (certificatesList.length > 0) {
      setZoomLevel(1);
      onNavigate(certificatesList[certificatesList.length - 1]);
    }
  }, [currentIndex, certificatesList, onNavigate]);

  const handleNext = useCallback(() => {
    if (currentIndex < certificatesList.length - 1) {
      setZoomLevel(1);
      onNavigate(certificatesList[currentIndex + 1]);
    } else if (certificatesList.length > 0) {
      setZoomLevel(1);
      onNavigate(certificatesList[0]);
    }
  }, [currentIndex, certificatesList, onNavigate]);

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.25, 0.75));
  };

  const handleResetZoom = () => {
    setZoomLevel(1);
  };

  // Keyboard navigation & Esc listener
  useEffect(() => {
    if (!certificate) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [certificate, onClose, handlePrev, handleNext]);

  if (!certificate) return null;

  const altText = `Certificate of ${certificate.title} issued by ${certificate.issuer}`;

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/80 backdrop-blur-md"
        role="dialog"
        aria-modal="true"
        aria-label={altText}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="relative flex flex-col w-full max-w-5xl h-[92vh] bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden"
        >
          {/* Header Controls */}
          <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800 z-10">
            <div className="flex items-center gap-2 min-w-0 pr-2">
              <span className="px-2 py-0.5 text-[11px] font-mono font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded">
                {certificate.category}
              </span>
              <h2 className="text-sm font-semibold text-white truncate max-w-xs sm:max-w-md">
                {certificate.title}
              </h2>
            </div>

            {/* Toolbar Buttons */}
            <div className="flex items-center gap-1 sm:gap-2 shrink-0">
              <div className="flex items-center bg-slate-800/80 rounded-lg p-1 border border-slate-700/50">
                <button
                  onClick={handleZoomOut}
                  disabled={zoomLevel <= 0.75}
                  title="Zoom Out"
                  aria-label="Zoom Out"
                  className="p-1.5 text-slate-300 hover:text-white hover:bg-slate-700/60 rounded disabled:opacity-40 transition-colors"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <span className="px-2 text-xs font-mono text-slate-400 min-w-[3.5rem] text-center">
                  {Math.round(zoomLevel * 100)}%
                </span>
                <button
                  onClick={handleZoomIn}
                  disabled={zoomLevel >= 3}
                  title="Zoom In"
                  aria-label="Zoom In"
                  className="p-1.5 text-slate-300 hover:text-white hover:bg-slate-700/60 rounded disabled:opacity-40 transition-colors"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button
                  onClick={handleResetZoom}
                  title="Reset Zoom"
                  aria-label="Reset Zoom"
                  className="p-1.5 text-slate-300 hover:text-white hover:bg-slate-700/60 rounded transition-colors ml-1"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>

              <a
                href={certificate.image}
                download
                title="Download Original Certificate Image"
                aria-label="Download Certificate Image"
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium text-emerald-300 bg-emerald-950/60 border border-emerald-800/80 hover:bg-emerald-900/60 rounded-lg transition-colors"
              >
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Download</span>
              </a>

              <button
                onClick={onClose}
                title="Close Viewer (Esc)"
                aria-label="Close Viewer"
                className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Main Image Viewer Area */}
          <div className="relative flex-1 bg-slate-950/90 overflow-auto flex items-center justify-center p-4 min-h-0">
            {/* Prev / Next Navigation Arrows */}
            {certificatesList.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  title="Previous Certificate (Left Arrow)"
                  aria-label="Previous Certificate"
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2.5 bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-white rounded-full shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  title="Next Certificate (Right Arrow)"
                  aria-label="Next Certificate"
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2.5 bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-white rounded-full shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            {/* Image Container with Zoom */}
            <div className="flex items-center justify-center w-full h-full overflow-auto">
              <motion.img
                key={certificate.id}
                src={certificate.image}
                alt={altText}
                style={{ transform: `scale(${zoomLevel})` }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="max-w-full max-h-full object-contain rounded shadow-2xl select-none transition-transform duration-150 origin-center"
              />
            </div>
          </div>

          {/* Footer Metadata */}
          <div className="px-4 py-3 bg-slate-900 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-300">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-mono">
              <span className="flex items-center gap-1.5 text-slate-300 font-medium">
                <Building className="w-3.5 h-3.5 text-emerald-400" />
                {certificate.issuer}
              </span>

              {certificate.issueDate && (
                <span className="flex items-center gap-1.5 text-slate-400">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  {certificate.issueDate}
                </span>
              )}

              {certificate.credentialId && (
                <span className="flex items-center gap-1.5 text-slate-400">
                  <Award className="w-3.5 h-3.5 text-slate-400" />
                  Credential ID: <code className="text-emerald-300">{certificate.credentialId}</code>
                </span>
              )}
            </div>

            {certificate.skills && certificate.skills.length > 0 && (
              <div className="flex items-center gap-1.5 overflow-x-auto max-w-full py-0.5">
                <Tag className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                {certificate.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300 whitespace-nowrap"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
