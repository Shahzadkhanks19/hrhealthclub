const gymInterior = "https://images.unsplash.com/photo-1623874514711-0f321325f318?auto=format&fit=crop&q=85&w=1800";
const gymRacks = "https://images.unsplash.com/photo-1623874106686-5be2b325c8f1?auto=format&fit=crop&q=85&w=1600";
const coachStrength = "https://images.unsplash.com/photo-1704223523204-504405c9331a?auto=format&fit=crop&q=85&w=1200";
const coachPress = "https://images.unsplash.com/photo-1745329532593-53a9ec306787?auto=format&fit=crop&q=85&w=1200";
const modernCardio = "https://images.unsplash.com/photo-1761971974992-6df33df97c3a?auto=format&fit=crop&q=85&w=1600";
const modernGym = "https://images.unsplash.com/photo-1775993167276-743bbcde77e1?auto=format&fit=crop&q=85&w=1600";
const dumbbells = "https://images.unsplash.com/photo-1775993699105-4d18bcac7e54?auto=format&fit=crop&q=85&w=1600";

export const heroImage = gymInterior;

export const programs = [
  { title: "MUSCLE BUILDING", copy: "Build lean muscle and increase strength.", image: dumbbells },
  { title: "FAT LOSS", copy: "Burn fat. Look fit. Stay in shape.", image: coachPress },
  { title: "STRENGTH TRAINING", copy: "Improve performance and lift heavier.", image: coachStrength },
  { title: "FUNCTIONAL TRAINING", copy: "Build real-world strength and mobility.", image: gymRacks },
  { title: "CARDIO FITNESS", copy: "Boost endurance and heart health.", image: modernCardio },
  { title: "YOGA & MOBILITY", copy: "Improve flexibility, posture and balance.", image: modernGym },
] as const;

export const coaches = [
  { name: "RAVI", role: "Strength Coach", copy: "Specialized in strength training and muscle building.", image: coachStrength },
  { name: "ASHISH", role: "Transformation Coach", copy: "Focused on fat loss and complete body transformation.", image: coachPress },
  { name: "SHENOY", role: "Fitness Coach", copy: "Helps members build sustainable fitness and wellness habits.", image: gymRacks },
] as const;

export const transformations = [
  { title: "LOST 12 KG", time: "IN 3 MONTHS", image: coachStrength },
  { title: "LOST 9 KG", time: "IN 2 MONTHS", image: coachPress },
  { title: "LOST 8 KG", time: "IN 3 MONTHS", image: dumbbells },
  { title: "GAINED 6 KG MUSCLE", time: "IN 4 MONTHS", image: gymRacks },
] as const;

export const galleryImages = [gymInterior, gymRacks, modernGym, modernCardio] as const;

export const reviews = [
  ["The best gym in Jodhpur! Amazing coaches and a great environment. Helped me transform myself completely.", "Yogendra Singh"],
  ["Expert trainers, modern equipment and a positive vibe. Highly recommend HR Health Club!", "Deepak Purohit"],
  ["I joined for fat loss and got excellent results. The coaches and community keep you motivated every day.", "Harshita Rathore"],
] as const;
