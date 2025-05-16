import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Music, User, Mail, Globe } from "lucide-react";

export default function DJMchomo() {
  return (
    <main className="min-h-screen bg-black text-white p-6 space-y-10">
      {/* Header */}
      <section className="text-center">
        <h1 className="text-5xl font-bold text-green-500">DJ Mchomo 🎶</h1>
        <p className="text-gray-400 mt-2">Burudani ya Kiswahili – Sikiliza, Jifunze na Furahia Muziki!</p>
      </section>

      {/* Upload + Link */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-zinc-900">
          <CardContent className="p-4 space-y-4">
            <h2 className="text-2xl font-semibold">🎧 Pakia Wimbo Mpya</h2>
            <Input type="file" accept="audio/*" className="bg-zinc-800 border-zinc-700" />
            <Button className="bg-green-600 hover:bg-green-500">Pakia</Button>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900">
          <CardContent className="p-4 space-y-4">
            <h2 className="text-2xl font-semibold">🔗 Ongeza Link ya Wimbo</h2>
            <Input placeholder="Weka link ya SoundCloud, Audiomack au nyingine" className="bg-zinc-800 border-zinc-700" />
            <Button className="bg-blue-600 hover:bg-blue-500">Ongeza Link</Button>
          </CardContent>
        </Card>
      </section>

      {/* Wasanii */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold">Wasanii</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[1, 2, 3].map((artist) => (
            <Card key={artist} className="bg-zinc-900">
              <CardContent className="p-4">
                <img
                  src="/msanii.jpg"
                  alt="Msanii"
                  className="w-full h-40 object-cover rounded-xl mb-3"
                />
                <h3 className="text-xl font-semibold">Jina la Msanii</h3>
                <p className="text-sm text-gray-400">Maelezo mafupi kuhusu msanii na kazi zake.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Nyimbo */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold">Nyimbo Zinazopatikana</h2>
        <Card className="bg-zinc-900">
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <Music className="text-green-400" />
              <div className="flex-1">
                <p className="text-lg">Jina la Wimbo - Msanii</p>
                <audio controls className="w-full mt-2">
                  <source src="/sample.mp3" type="audio/mpeg" />
                  Kifaa chako hakiungi mkono audio tag.
                </audio>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Blogu na Matangazo */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold">Blogu na Matangazo</h2>
        <Card className="bg-zinc-900">
          <CardContent className="p-4 space-y-2">
            <h3 className="text-xl font-semibold">Kichwa cha Habari</h3>
            <p className="text-gray-400 text-sm">Habari fupi kuhusu tukio la muziki, albamu mpya, au habari za burudani.</p>
          </CardContent>
        </Card>
      </section>

      {/* Mawasiliano */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold">Mawasiliano</h2>
        <Card className="bg-zinc-900">
          <CardContent className="p-4 space-y-4">
            <Input placeholder="Jina lako" className="bg-zinc-800 border-zinc-700" />
            <Input type="email" placeholder="Barua pepe" className="bg-zinc-800 border-zinc-700" />
            <Input placeholder="Ujumbe wako" className="bg-zinc-800 border-zinc-700" />
            <Button className="bg-green-600 hover:bg-green-500">Tuma Ujumbe</Button>
          </CardContent>
        </Card>
      </section>

      {/* Social Media Links */}
      <footer className="text-center text-gray-500 text-sm pt-10 border-t border-zinc-700 mt-10">
        <p>🔗 Tufuatilie: 
          <a href="#" className="text-white hover:text-green-400 ml-2">Instagram</a> |
          <a href="#" className="text-white hover:text-green-400 ml-2">YouTube</a> |
          <a href="#" className="text-white hover:text-green-400 ml-2">TikTok</a>
        </p>
        <p className="mt-2">© 2025 DJ Mchomo. Haki zote zimehifadhiwa.</p>
      </footer>
    </main>
  );
}
