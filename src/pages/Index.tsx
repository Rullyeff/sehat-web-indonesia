
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Heart } from 'lucide-react';

const Index: React.FC = () => {
  const services = [
    { name: 'Pemeriksaan Umum', description: 'Layanan pemeriksaan kesehatan rutin untuk semua usia.', icon: <Heart size={32} className="text-blue-500" /> },
    { name: 'Kesehatan Gigi', description: 'Perawatan gigi komprehensif oleh dokter gigi profesional.', icon: <CheckCircle size={32} className="text-emerald-500" /> },
    { name: 'Konsultasi Spesialis', description: 'Konsultasi dengan dokter spesialis untuk berbagai kebutuhan medis.', icon: <Users size={32} className="text-purple-500" /> },
  ];

  const whyChooseUsItems = [
    { title: 'Dokter Berpengalaman', description: 'Tim dokter kami terdiri dari para profesional berpengalaman di bidangnya masing-masing.'},
    { title: 'Fasilitas Modern', description: 'Dilengkapi dengan peralatan medis terkini untuk diagnosis dan perawatan yang akurat.'},
    { title: 'Pelayanan Ramah', description: 'Kami berkomitmen memberikan pelayanan yang ramah, cepat, dan mengutamakan kenyamanan pasien.'},
  ];

  return (
    <div className="bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-500 text-white py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Selamat Datang di Klinik Sejahtera</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto animate-fade-in animation-delay-300">
            Pelayanan kesehatan terbaik untuk Anda dan keluarga. Kami hadir untuk memberikan solusi kesehatan yang komprehensif dan terpercaya.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-slate-100 transition-transform transform hover:scale-105 animate-fade-in animation-delay-600"
          >
            Buat Janji Temu <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </section>

      {/* Our Services Preview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Layanan Unggulan Kami</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow transform hover:-translate-y-1">
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-slate-700 mb-3 text-center">{service.name}</h3>
                <p className="text-slate-600 text-center mb-4 text-sm">{service.description}</p>
                <Link to="/services" className="block text-center text-blue-500 hover:text-blue-700 font-medium text-sm">
                  Selengkapnya <ArrowRight size={16} className="inline ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="bg-slate-100 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Mengapa Memilih Kami?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUsItems.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                 <CheckCircle size={24} className="text-emerald-500 mb-3" />
                <h3 className="text-xl font-semibold text-slate-700 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-blue-500 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Siap Untuk Kesehatan yang Lebih Baik?</h2>
          <p className="text-lg mb-8 max-w-xl mx-auto">
            Jangan tunda lagi, segera konsultasikan kebutuhan kesehatan Anda dengan tim profesional kami.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-slate-100 transition-colors"
          >
            Hubungi Kami Sekarang
          </Link>
        </div>
      </section>
      <style jsx>{`
        .animation-delay-300 { animation-delay: 0.3s; }
        .animation-delay-600 { animation-delay: 0.6s; }
        .animate-fade-in {
          opacity: 0;
          animation: fadeIn 0.8s ease-out forwards;
        }
        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Index;
