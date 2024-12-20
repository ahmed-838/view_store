import type { Product } from '../types';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Classic Wool Suit',
    description: 'Premium Italian wool suit in charcoal grey. Featuring a timeless two-button design, notch lapels, and expert tailoring for a refined silhouette. Perfect for business meetings and formal occasions.',
    price: 899.99,
    type: 'suit',
    category: 'formal',
    images: [
      'https://picsum.photos/800/600?random=1',
      'https://picsum.photos/800/600?random=2',
      'https://picsum.photos/800/600?random=3',
      'https://picsum.photos/800/600?random=4'
    ],
    inventory: 10,
    created_at: new Date().toISOString()
  },
  {
    id: '2',
    name: 'Leather Oxford Shoes',
    description: 'Hand-crafted leather oxford shoes made from premium calfskin. Features Goodyear welted construction, leather soles, and traditional brogueing details.',
    price: 299.99,
    type: 'shoes',
    category: 'formal',
    images: [
      'https://picsum.photos/800/600?random=5',
      'https://picsum.photos/800/600?random=6',
      'https://picsum.photos/800/600?random=7',
      'https://picsum.photos/800/600?random=8'
    ],
    inventory: 15,
    created_at: new Date().toISOString()
  },
  {
    id: '3',
    name: 'Cashmere Sweater',
    description: 'Pure cashmere sweater in navy blue. Made from the finest Mongolian cashmere for exceptional softness and warmth. Features a classic crew neck and ribbed cuffs.',
    price: 249.99,
    type: 'sweater',
    category: 'casual',
    images: [
      'https://picsum.photos/800/600?random=9',
      'https://picsum.photos/800/600?random=10',
      'https://picsum.photos/800/600?random=11',
      'https://picsum.photos/800/600?random=12'
    ],
    inventory: 20,
    created_at: new Date().toISOString()
  },
  {
    id: '4',
    name: 'Navy Blazer',
    description: 'A versatile navy blazer made from high-quality fabric. Perfect for both casual and formal occasions.',
    price: 499.99,
    type: 'suit',
    category: 'formal',
    images: [
      'https://picsum.photos/800/600?random=13'
    ],
    inventory: 12,
    created_at: new Date().toISOString()
  },
  {
    id: '14',
    name: 'Chinos',
    description: 'Comfortable chinos made from breathable cotton. Ideal for casual outings.',
    price: 79.99,
    type: 'pants',
    category: 'casual',
    images: [
      'https://picsum.photos/800/600?random=14'
    ],
    inventory: 25,
    created_at: new Date().toISOString()
  },
  {
    id: '5',
    name: 'Grey Pinstripe Suit',
    description: 'Stylish grey pinstripe suit, perfect for business and formal events.',
    price: 899.99,
    type: 'suit',
    category: 'formal',
    images: [
      'https://picsum.photos/800/600?random=15'
    ],
    inventory: 8,
    created_at: new Date().toISOString()
  },
  {
    id: '6',
    name: 'Black Tuxedo',
    description: 'Classic black tuxedo for formal occasions, featuring satin lapels.',
    price: 1099.99,
    type: 'suit',
    category: 'formal',
    images: [
      'https://picsum.photos/800/600?random=16'
    ],
    inventory: 5,
    created_at: new Date().toISOString()
  },
  {
    id: '7',
    name: 'White Dress Shirt',
    description: 'Crisp white dress shirt made from 100% cotton, perfect for any formal outfit.',
    price: 49.99,
    type: 'shirt',
    category: 'formal',
    images: [
      'https://picsum.photos/800/600?random=17'
    ],
    inventory: 20,
    created_at: new Date().toISOString()
  },
  {
    id: '8',
    name: 'Silk Tie',
    description: 'Elegant silk tie available in various colors, perfect for formal wear.',
    price: 29.99,
    type: 'accessory',
    category: 'formal',
    images: [
      'https://picsum.photos/800/600?random=18'
    ],
    inventory: 30,
    created_at: new Date().toISOString()
  },
  {
    id: '9',
    name: 'Leather Belt',
    description: 'High-quality leather belt, perfect for completing any formal outfit.',
    price: 39.99,
    type: 'accessory',
    category: 'formal',
    images: [
      'https://picsum.photos/800/600?random=19'
    ],
    inventory: 25,
    created_at: new Date().toISOString()
  },
  {
    id: '10',
    name: 'Formal Loafers',
    description: 'Stylish formal loafers made from premium leather, perfect for office wear.',
    price: 199.99,
    type: 'shoes',
    category: 'formal',
    images: [
      'https://picsum.photos/800/600?random=20'
    ],
    inventory: 15,
    created_at: new Date().toISOString()
  },
  {
    id: '11',
    name: 'Tailored Shorts',
    description: 'Smart tailored shorts for summer events, made from lightweight fabric.',
    price: 59.99,
    type: 'shorts',
    category: 'formal',
    images: [
      'https://picsum.photos/800/600?random=21'
    ],
    inventory: 10,
    created_at: new Date().toISOString()
  },
  {
    id: '12',
    name: 'Formal Cufflinks',
    description: 'Elegant cufflinks to add a touch of sophistication to your formal attire.',
    price: 49.99,
    type: 'accessory',
    category: 'formal',
    images: [
      'https://picsum.photos/800/600?random=22'
    ],
    inventory: 40,
    created_at: new Date().toISOString()
  },
  {
    id: '13',
    name: 'Wool Overcoat',
    description: 'Stylish wool overcoat for colder months, perfect for layering over suits.',
    price: 299.99,
    type: 'coat',
    category: 'formal',
    images: [
      'https://picsum.photos/800/600?random=23'
    ],
    inventory: 7,
    created_at: new Date().toISOString()
  },
  {
    id: '15',
    name: 'Casual T-Shirt',
    description: 'Comfortable cotton t-shirt available in various colors.',
    price: 19.99,
    type: 't-shirt',
    category: 'casual',
    images: [
      'https://picsum.photos/800/600?random=24'
    ],
    inventory: 50,
    created_at: new Date().toISOString()
  },
  {
    id: '16',
    name: 'Denim Jacket',
    description: 'Classic denim jacket, perfect for casual outings and layering.',
    price: 89.99,
    type: 'jacket',
    category: 'casual',
    images: [
      'https://picsum.photos/800/600?random=25'
    ],
    inventory: 30,
    created_at: new Date().toISOString()
  },
  {
    id: '17',
    name: 'Graphic Hoodie',
    description: 'Stylish graphic hoodie for a casual look, made from soft fabric.',
    price: 49.99,
    type: 'hoodie',
    category: 'casual',
    images: [
      'https://picsum.photos/800/600?random=26'
    ],
    inventory: 25,
    created_at: new Date().toISOString()
  },
  {
    id: '18',
    name: 'Cargo Shorts',
    description: 'Comfortable cargo shorts with multiple pockets, ideal for summer.',
    price: 39.99,
    type: 'shorts',
    category: 'casual',
    images: [
      'https://picsum.photos/800/600?random=27'
    ],
    inventory: 20,
    created_at: new Date().toISOString()
  },
  {
    id: '19',
    name: 'Sneakers',
    description: 'Trendy sneakers for everyday wear, available in various colors.',
    price: 69.99,
    type: 'shoes',
    category: 'casual',
    images: [
      'https://picsum.photos/800/600?random=28'
    ],
    inventory: 40,
    created_at: new Date().toISOString()
  },
  {
    id: '20',
    name: 'Casual Pants',
    description: 'Comfortable casual pants made from breathable fabric.',
    price: 49.99,
    type: 'pants',
    category: 'casual',
    images: [
      'https://picsum.photos/800/600?random=29'
    ],
    inventory: 35,
    created_at: new Date().toISOString()
  },
  {
    id: '21',
    name: 'Flannel Shirt',
    description: 'Soft flannel shirt, perfect for layering in cooler weather.',
    price: 39.99,
    type: 'shirt',
    category: 'casual',
    images: [
      'https://picsum.photos/800/600?random=30'
    ],
    inventory: 30,
    created_at: new Date().toISOString()
  },
  {
    id: '22',
    name: 'Baseball Cap',
    description: 'Stylish baseball cap for a casual look, available in various colors.',
    price: 24.99,
    type: 'accessory',
    category: 'casual',
    images: [
      'https://picsum.photos/800/600?random=31'
    ],
    inventory: 50,
    created_at: new Date().toISOString()
  },
  {
    id: '23',
    name: 'Backpack',
    description: 'Durable backpack for everyday use, perfect for school or travel.',
    price: 59.99,
    type: 'bag',
    category: 'casual',
    images: [
      'https://picsum.photos/800/600?random=32'
    ],
    inventory: 15,
    created_at: new Date().toISOString()
  },
  {
    id: '24',
    name: 'Lightweight Jacket',
    description: 'Breathable lightweight jacket for spring and fall.',
    price: 79.99,
    type: 'jacket',
    category: 'casual',
    images: [
      'https://picsum.photos/800/600?random=33'
    ],
    inventory: 20,
    created_at: new Date().toISOString()
  },
  {
    id: '25',
    name: 'Puffer Jacket',
    description: 'Warm puffer jacket, perfect for winter outings.',
    price: 129.99,
    type: 'jacket',
    category: 'outerwear',
    images: [
      'https://picsum.photos/800/600?random=34'
    ],
    inventory: 15,
    created_at: new Date().toISOString()
  },
  {
    id: '26',
    name: 'Wool Scarf',
    description: 'Soft wool scarf to keep you warm during colder months.',
    price: 39.99,
    type: 'accessory',
    category: 'outerwear',
    images: [
      'https://picsum.photos/800/600?random=35'
    ],
    inventory: 25,
    created_at: new Date().toISOString()
  },
  {
    id: '27',
    name: 'Thermal Long Sleeve Shirt',
    description: 'Comfortable thermal long sleeve shirt for layering.',
    price: 29.99,
    type: 'shirt',
    category: 'innerwear',
    images: [
      'https://picsum.photos/800/600?random=36'
    ],
    inventory: 30,
    created_at: new Date().toISOString()
  },
  {
    id: '28',
    name: 'Fleece Pajama Pants',
    description: 'Soft fleece pajama pants for cozy nights.',
    price: 49.99,
    type: 'pants',
    category: 'innerwear',
    images: [
      'https://picsum.photos/800/600?random=37'
    ],
    inventory: 20,
    created_at: new Date().toISOString()
  }
];