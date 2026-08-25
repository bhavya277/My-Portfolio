import React, { useState, useMemo } from 'react';
import { certificationsData } from '../data/certifications';
import { CertificationItem } from '../types';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { CertificateModal } from '../components/certifications/CertificateModal';
import { 
  Search, 
  Calendar, 
  Award, 
  Eye, 
  Download, 
  Sparkles, 
  SlidersHorizontal,
  Building
} from 'lucide-react';

export const CertificationsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalCert, setActiveModalCert] = useState<CertificationItem | null>(null);

  // Separate featured certificates
  const featuredCertificates = useMemo(() => {
    return certificationsData.filter((cert) => cert.featured);
  }, []);

  // Compute available categories dynamically based ONLY on certificates present in inventory
  const availableCategories = useMemo(() => {
    const cats = Array.from(new Set(certificationsData.map((c) => c.category)));
    return ['All', ...cats.sort()];
  }, []);

  // Filtered certificates based on search query and category filter
  const filteredCertificates = useMemo(() => {
    return certificationsData.filter((cert) => {
      // Category match
      const matchesCategory =
        selectedCategory === 'All' || cert.category === selectedCategory;

      // Search match
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const matchesTitle = cert.title.toLowerCase().includes(query);
      const matchesIssuer = cert.issuer.toLowerCase().includes(query);
      const matchesCategoryText = cert.category.toLowerCase().includes(query);
      const matchesSkills = cert.skills.some((s) => s.toLowerCase().includes(query));
      const matchesProgram = cert.programName?.toLowerCase().includes(query) ?? false;
      const matchesPlatform = cert.platform?.toLowerCase().includes(query) ?? false;

      return (
        matchesCategory &&
        (matchesTitle ||
          matchesIssuer ||
          matchesCategoryText ||
          matchesSkills ||
          matchesProgram ||
          matchesPlatform)
      );
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <SectionHeader
        label="VERIFIED CREDENTIALS"
        title="Certifications & Technical Badges"
        description={`Verified portfolio inventory of ${certificationsData.length} technical credentials, professional certificates, course completions, and hackathon recognitions.`}
      />

      {/* FEATURED CERTIFICATIONS SECTION */}
      {featuredCertificates.length > 0 && (
        <section className="mb-14" aria-labelledby="featured-certifications-heading">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <h2 
              id="featured-certifications-heading"
              className="text-xl font-bold text-white tracking-tight"
            >
              Featured Certifications
            </h2>
            <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/20">
              Top Highlighted
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCertificates.map((cert) => {
              const altText = `Certificate of ${cert.title} issued by ${cert.issuer}`;
              return (
                <Card 
                  key={cert.id} 
                  variant="default" 
                  className="group relative flex flex-col justify-between overflow-hidden border-border-dark hover:border-emerald-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-950/20"
                >
                  <div>
                    {/* Thumbnail Image Container */}
                    <div 
                      onClick={() => setActiveModalCert(cert)}
                      className="relative h-48 w-full bg-slate-950 overflow-hidden cursor-pointer group-hover:brightness-105 transition-all"
                    >
                      <img
                        src={cert.image}
                        alt={altText}
                        loading="lazy"
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />
                      
                      <div className="absolute top-3 left-3">
                        <Badge variant="primary" size="sm">
                          {cert.category}
                        </Badge>
                      </div>

                      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="inline-flex items-center gap-1 text-xs font-mono px-2.5 py-1 rounded-md bg-slate-900/90 text-emerald-300 border border-emerald-500/30 backdrop-blur-sm shadow-md">
                          <Eye className="w-3.5 h-3.5" /> View
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-5">
                      <div className="flex items-center justify-between gap-2 text-xs font-mono text-slate-400 mb-2">
                        <span className="flex items-center gap-1.5 text-slate-300 truncate">
                          <Building className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          {cert.issuer}
                        </span>
                        {cert.issueDate && (
                          <span className="flex items-center gap-1 text-slate-400 shrink-0">
                            <Calendar className="w-3 h-3" /> {cert.issueDate}
                          </span>
                        )}
                      </div>

                      <h3 
                        onClick={() => setActiveModalCert(cert)}
                        className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors tracking-tight mb-2 cursor-pointer"
                      >
                        {cert.title}
                      </h3>

                      {cert.credentialId && (
                        <div className="text-[11px] font-mono text-slate-400 mb-3 bg-slate-900/60 px-2.5 py-1 rounded border border-slate-800/80 inline-block">
                          Credential ID: <span className="text-emerald-300">{cert.credentialId}</span>
                        </div>
                      )}

                      {/* Skills Tags */}
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {cert.skills.slice(0, 4).map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="px-5 py-3.5 bg-slate-900/40 border-t border-border-dark flex items-center justify-between gap-2">
                    <button
                      onClick={() => setActiveModalCert(cert)}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-emerald-400 hover:text-emerald-300 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded px-1"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Certificate</span>
                    </button>

                    <a
                      href={cert.image}
                      download
                      title="Download Certificate"
                      aria-label={`Download ${cert.title}`}
                      className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded transition-colors"
                    >
                      <Download className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </Card>
              );
            })}
          </div>
        </section>
      )}

      {/* SEARCH AND FILTERS SECTION */}
      <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 sm:p-6 mb-8 backdrop-blur-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title, issuer, category, or skills (e.g. Python, Google, IIT)..."
              className="w-full pl-10 pr-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
              aria-label="Search certificates"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-400 hover:text-white bg-slate-800 px-2 py-0.5 rounded"
              >
                Clear
              </button>
            )}
          </div>

          {/* Results Counter */}
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 shrink-0">
            <SlidersHorizontal className="w-3.5 h-3.5 text-emerald-400" />
            <span>Showing <strong className="text-white font-semibold">{filteredCertificates.length}</strong> of {certificationsData.length} certificates</span>
          </div>
        </div>

        {/* Dynamic Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {availableCategories.map((cat) => {
            const count =
              cat === 'All'
                ? certificationsData.length
                : certificationsData.filter((c) => c.category === cat).length;

            const isSelected = selectedCategory === cat;

            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all shrink-0 flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                  isSelected
                    ? 'bg-emerald-500 text-slate-950 shadow-md font-semibold'
                    : 'bg-slate-950 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isSelected
                      ? 'bg-slate-950/20 text-slate-950 font-bold'
                      : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ALL CERTIFICATIONS SECTION */}
      <section aria-labelledby="all-certifications-heading">
        <div className="flex items-center justify-between mb-6">
          <h2 
            id="all-certifications-heading"
            className="text-xl font-bold text-white tracking-tight flex items-center gap-2"
          >
            <Award className="w-5 h-5 text-emerald-400" />
            All Certifications
          </h2>
        </div>

        {filteredCertificates.length === 0 ? (
          <div className="text-center py-16 bg-slate-900/40 border border-slate-800 rounded-2xl p-8">
            <Award className="w-12 h-12 text-slate-600 mx-auto mb-3" />
            <h3 className="text-base font-semibold text-white mb-1">No matching certificates found</h3>
            <p className="text-sm text-slate-400 max-w-md mx-auto mb-4">
              Try adjusting your search query or switching category filters to view verified credentials.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="px-4 py-2 text-xs font-mono font-medium bg-emerald-500 text-slate-950 hover:bg-emerald-400 rounded-lg transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCertificates.map((cert) => {
              const altText = `Certificate of ${cert.title} issued by ${cert.issuer}`;
              return (
                <Card 
                  key={cert.id} 
                  variant="default" 
                  className="group relative flex flex-col justify-between overflow-hidden border-border-dark hover:border-slate-700 transition-all duration-200"
                >
                  <div>
                    {/* Image Thumbnail */}
                    <div 
                      onClick={() => setActiveModalCert(cert)}
                      className="relative h-44 w-full bg-slate-950 overflow-hidden cursor-pointer group-hover:brightness-105 transition-all"
                    >
                      <img
                        src={cert.image}
                        alt={altText}
                        loading="lazy"
                        className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />
                      
                      <div className="absolute top-3 left-3">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900/90 text-emerald-400 border border-slate-700 backdrop-blur-sm">
                          {cert.category}
                        </span>
                      </div>

                      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900/90 text-white border border-slate-700 backdrop-blur-sm">
                          <Eye className="w-3 h-3" /> View
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <div className="flex items-center justify-between gap-2 text-[11px] font-mono text-slate-400 mb-1.5">
                        <span className="flex items-center gap-1 text-slate-300 truncate">
                          <Building className="w-3 h-3 text-emerald-400 shrink-0" />
                          {cert.issuer}
                        </span>
                        {cert.issueDate && (
                          <span className="shrink-0">{cert.issueDate}</span>
                        )}
                      </div>

                      <h3 
                        onClick={() => setActiveModalCert(cert)}
                        className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors tracking-tight mb-2 cursor-pointer line-clamp-2"
                      >
                        {cert.title}
                      </h3>

                      {cert.credentialId && (
                        <div className="text-[10px] font-mono text-slate-400 mb-2 truncate">
                          ID: <span className="text-emerald-300">{cert.credentialId}</span>
                        </div>
                      )}

                      {/* Skills */}
                      <div className="flex flex-wrap gap-1 mt-2">
                        {cert.skills.slice(0, 3).map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300"
                          >
                            {skill}
                          </span>
                        ))}
                        {cert.skills.length > 3 && (
                          <span className="text-[10px] font-mono px-1.5 py-0.5 text-slate-500">
                            +{cert.skills.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="px-4 py-2.5 bg-slate-900/30 border-t border-border-dark flex items-center justify-between">
                    <button
                      onClick={() => setActiveModalCert(cert)}
                      className="inline-flex items-center gap-1 text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View</span>
                    </button>

                    <a
                      href={cert.image}
                      download
                      title={`Download ${cert.title}`}
                      aria-label={`Download ${cert.title}`}
                      className="p-1 text-slate-400 hover:text-white hover:bg-slate-800 rounded transition-colors"
                    >
                      <Download className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </Card>
              );
            })}
          </div>
        )}
      </section>

      {/* Lightbox / Modal Viewer */}
      <CertificateModal
        certificate={activeModalCert}
        certificatesList={filteredCertificates}
        onClose={() => setActiveModalCert(null)}
        onNavigate={(cert) => setActiveModalCert(cert)}
      />
    </div>
  );
};

export default CertificationsPage;
