// Configuração pública do Firebase (não é segredo — a segurança é feita pelas Firestore Rules)
const firebaseConfig = {
  apiKey: "AIzaSyAvACZ7RLIc7_AQS5mb8cqVJPfhQQwqC_k",
  authDomain: "escolajairoveiria.firebaseapp.com",
  projectId: "escolajairoveiria",
  storageBucket: "escolajairoveiria.firebasestorage.app",
  messagingSenderId: "853566513828",
  appId: "1:853566513828:web:07bee62164405d23b3bc31"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

const SCHOOL_LAT = -23.5872555;
const SCHOOL_LNG = -48.0212186;
const CHECKIN_RADIUS_METERS = 150;

function distanceToSchoolMeters(lat, lng) {
  const metersPerDegLat = 111320;
  const metersPerDegLng = 111320 * Math.cos(SCHOOL_LAT * Math.PI / 180);
  const dLat = (lat - SCHOOL_LAT) * metersPerDegLat;
  const dLng = (lng - SCHOOL_LNG) * metersPerDegLng;
  return Math.sqrt(dLat * dLat + dLng * dLng);
}

function formatDateTime(timestamp) {
  if (!timestamp) return "-";
  const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
  return date.toLocaleString("pt-BR", { dateStyle: "short", timeStyle: "short" });
}
