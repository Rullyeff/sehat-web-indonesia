
import React from 'react';
import { Award, Eye, Users, UserCheck } from 'lucide-react'; // UserCheck for team members

const About: React.FC = () => {
  const teamMembers = [
    { name: 'Dr. Budi Santoso', role: 'Dokter Umum Senior', image: '/placeholder.svg' }, // Replace with actual image paths
    { name: 'Dr. Ayu Lestari', role: 'Spesialis Anak', image: '/placeholder.svg' },
    { name: 'Dr. Rahmat Hidayat', role: 'Dokter Gigi', image: '/placeholder.svg' },
  ];

  return (
    <div className="py-12 md:py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Tentang Klinik Sejahtera</h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Berkomitmen untuk memberikan pelayanan kesehatan terbaik dengan integritas, profesionalisme, dan kasih sayang.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
          <div>
            <img src="/placeholder.svg" alt="Klinik Sejahtera" className="rounded-lg shadow-xl w-full h-auto object-cover aspect-video" />
             {/* Sebaiknya gunakan gambar gedung klinik atau suasana interior yang profesional.
                 Gunakan placeholder.svg jika belum ada gambar: https://via.placeholder.com/800x500.png?text=Gedung+Klinik
             */}
          </div>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <Award size={32} className="text-blue-500 mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-semibold text-slate-700 mb-2">Misi Kami</h2>
                <p className="text-slate-600">
                  Menyediakan layanan kesehatan yang berkualitas tinggi, mudah diakses, dan terjangkau bagi seluruh lapisan masyarakat. Kami berfokus pada pendekatan preventif dan kuratif dengan teknologi medis modern dan tim medis yang kompeten.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Eye size={32} className="text-emerald-500 mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-semibold text-slate-700 mb-2">Visi Kami</h2>
                <p className="text-slate-600">
                  Menjadi pusat layanan kesehatan rujukan yang terpercaya dan unggul dalam inovasi, serta berkontribusi aktif dalam meningkatkan derajat kesehatan masyarakat secara berkelanjutan.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
          <Users size={40} className="text-blue-500 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-slate-800 mb-2">Tim Dokter Profesional Kami</h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            Didukung oleh tim dokter spesialis dan umum yang berpengalaman dan berdedikasi.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover bg-slate-200" />
              <h3 className="text-xl font-semibold text-slate-700">{member.name}</h3>
              <p className="text-blue-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
