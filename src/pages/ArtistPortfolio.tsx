import { useParams, Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const artistsData = [
  {
    id: '1',
    name: 'Alex Rivers',
    specialty: 'Realism & Portrait',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop',
    description: 'Specializing in photorealistic portraits and detailed black and gray work.',
    gallery: [
      '/gallery/alex1.jpg',
      '/gallery/alex2.jpg',
      '/gallery/alex3.jpg',
    ],
  },
  {
    id: '2',
    name: 'Jordan Chen',
    specialty: 'Neo-Traditional',
    image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=1000&auto=format&fit=crop',
    description: 'Known for bold lines and vivid colors in neo-traditional and Japanese inspired designs.',
    gallery: [
      '/gallery/jordan1.jpg',
      '/gallery/jordan2.jpg',
      '/gallery/jordan3.jpg',
    ],
  },
  {
    id: '3',
    name: 'Sam Taylor',
    specialty: 'Minimalist & Geometric',
    image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1000&auto=format&fit=crop',
    description: 'Creates clean, precise geometric designs and minimalist artwork with elegant lines.',
    gallery: [
      '/gallery/sam1.jpg',
      '/gallery/sam2.jpg',
      '/gallery/sam3.jpg',
    ],
  },
];

const ArtistPortfolio = () => {
  const { id } = useParams();
  const artist = artistsData.find((a) => a.id === id);

  if (!artist) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold mb-4">Artist Not Found</h2>
        <Button asChild>
          <Link to="/">Back to Home</Link>
        </Button>
      </div>
    );
  }

  return (
    <section className="py-20 bg-white min-h-screen">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-10 mb-12">
          <img src={artist.image} alt={artist.name} className="w-64 h-64 object-cover rounded-2xl shadow-lg" />
          <div>
            <h1 className="text-4xl font-extrabold mb-2 deadwood-font uppercase tracking-widest">
              {artist.name}
            </h1>
            <h2 className="text-xl text-green-700 font-semibold mb-2">{artist.specialty}</h2>
            <p className="text-gray-700 mb-4">{artist.description}</p>
            <Button asChild variant="outline">
              <Link to="/">Back to Artists</Link>
            </Button>
          </div>
        </div>
        <h3 className="text-2xl font-bold mb-6 text-center">Portfolio</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {artist.gallery.map((img, idx) => (
            <Card key={idx} className="overflow-hidden shadow-lg">
              <CardContent className="p-0">
                <img src={img} alt={`Tattoo ${idx + 1}`} className="w-full h-72 object-cover hover:scale-105 transition-transform duration-300" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArtistPortfolio; 