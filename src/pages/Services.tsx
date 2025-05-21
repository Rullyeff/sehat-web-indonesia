
import React from 'react';
import { Stethoscope, Heart, Users, Microscope, Bone, Baby } from 'lucide-react';

interface ServiceItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex items-start space-x-4">
    <div className="flex-shrink-0 text-blue-500">{icon}</div>
    <div>
      <h3 className="text-xl font-semibold text-slate-700 mb-2">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  </div>
);

const Services: React.FC = () => {
  const serviceList = [
    { title: 'Pemeriksaan Umum', description: 'Layanan pemeriksaan kesehatan menyeluruh untuk deteksi dini dan pencegahan penyakit.', icon: <Heart size={28} /> },
    { title: 'Kesehatan Anak', description: 'Perawatan kesehatan komprehensif untuk bayi, anak-anak, dan remaja.', icon: <Baby size={28} /> },
    { title: 'Kesehatan Gigi & Mulut', description: 'Layanan perawatan gigi, mulai dari pembersihan karang gigi hingga tindakan lebih lanjut.', icon: <Stethoscope size={28} /> /* Placeholder, idealnya icon gigi */ },
    { title: 'Vaksinasi & Imunisasi', description: 'Penyediaan berbagai jenis vaksin untuk dewasa dan anak-anak.', icon: <Users size={28} /> /* Placeholder, idealnya icon syringe */ },
    { title: 'Laboratorium Klinik', description: 'Pemeriksaan laboratorium lengkap untuk mendukung diagnosis dokter.', icon: <Microscope size={28} /> },
    { title: 'Fisioterapi', description: 'Program rehabilitasi untuk memulihkan fungsi gerak tubuh pasca cedera atau penyakit.', icon: <Bone size={28} /> },
    { title: 'Konsultasi Gizi', description: 'Bimbingan dan perencanaan nutrisi oleh ahli gizi profesional.', icon: <Heart size={28} /> /* Placeholder */ },
    { title: 'Bedah Minor', description: 'Tindakan bedah kecil yang dapat dilakukan dengan anestesi lokal.', icon: <Stethoscope size={28} /> /* Placeholder */ },
  ];

  return (
    <div className="py-12 md:py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Layanan Kesehatan Kami</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Kami menyediakan berbagai layanan kesehatan berkualitas untuk memenuhi kebutuhan Anda dan keluarga.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceList.map((service, index) => (
            <ServiceItem key={index} icon={service.icon} title={service.title} description={service.description} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
