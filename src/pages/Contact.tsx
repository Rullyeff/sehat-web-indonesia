
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button'; // Assuming shadcn button is available
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';


const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to an API)
    // For now, just log to console or show a toast.
    console.log('Form submitted');
    alert('Pesan Anda telah terkirim (simulasi).');
  };

  return (
    <div className="py-12 md:py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Hubungi Kami</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Kami siap membantu Anda. Silakan hubungi kami melalui formulir di bawah ini atau detail kontak yang tersedia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-xl">
            <h2 className="text-2xl font-semibold text-slate-700 mb-6">Kirim Pesan</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Nama Lengkap</Label>
                <Input type="text" name="name" id="name" required className="w-full" placeholder="John Doe" />
              </div>
              <div>
                <Label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Alamat Email</Label>
                <Input type="email" name="email" id="email" required className="w-full" placeholder="anda@contoh.com" />
              </div>
              <div>
                <Label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">Subjek</Label>
                <Input type="text" name="subject" id="subject" required className="w-full" placeholder="Pertanyaan tentang layanan" />
              </div>
              <div>
                <Label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Pesan Anda</Label>
                <Textarea name="message" id="message" rows={4} required className="w-full" placeholder="Tuliskan pesan Anda di sini..."></Textarea>
              </div>
              <div>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Kirim Pesan
                </Button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-xl">
              <h2 className="text-2xl font-semibold text-slate-700 mb-6">Informasi Kontak</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin size={24} className="text-blue-500" />
                  <div>
                    <h3 className="text-lg font-medium text-slate-700">Alamat</h3>
                    <p className="text-slate-600">Jl. Sehat Selalu No. 123, Kota Bahagia, Indonesia 12345</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={24} className="text-blue-500" />
                  <div>
                    <h3 className="text-lg font-medium text-slate-700">Telepon</h3>
                    <p className="text-slate-600">(021) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={24} className="text-blue-500" />
                  <div>
                    <h3 className="text-lg font-medium text-slate-700">Email</h3>
                    <p className="text-slate-600">info@kliniksejahtera.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-xl">
              <h2 className="text-2xl font-semibold text-slate-700 mb-4">Jam Operasional</h2>
              <ul className="text-slate-600 space-y-1">
                <li>Senin - Jumat: 08:00 - 20:00</li>
                <li>Sabtu: 09:00 - 17:00</li>
                <li>Minggu & Hari Libur: Tutup (Kecuali Gawat Darurat)</li>
              </ul>
            </div>
             {/* Placeholder for Map, can be an iframe from Google Maps */}
            <div className="bg-white p-8 rounded-lg shadow-xl h-64 flex items-center justify-center text-slate-400">
              [Placeholder Peta Lokasi Klinik]
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
