const roomData = [
  {
    id: 31929,
    type: "SS",
    generalType: "BASIC ROOMS",
    detail: "Single room with shared bathroom",
    rooms: 11,
    roomPrice: 48,
    offerPrice: null,
    actualPrice: null,
  },
  {
    id: 31921,
    type: "DS",
    generalType: "BASIC ROOMS",
    detail: "Double room with shared bathroom",
    rooms: 3,
    roomPrice: 58,
    offerPrice: null,
    actualPrice: null,
  },
  {
    id: 31934,
    type: "TS",
    generalType: "BASIC ROOMS",
    detail: "Single Bed TWIN ROOM WITH SHARED BATHROOM",
    rooms: 5,
    roomPrice: 60,
    offerPrice: null,
    actualPrice: null,
  },
  {
    id: 31932,
    type: "TRIS",
    generalType: "BASIC ROOMS",
    detail: "Single Bed TRIPLE ROOM WITH SHARED BATHROOM",
    rooms: 1,
    roomPrice: 85,
    offerPrice: null,
    actualPrice: null,
  },
  {
    id: 448374,
    type: "DE",
    generalType: "ENSUITE",
    detail: "Double Bed DOUBLE ROOM WITH PRIVATE BATHROOM",
    rooms: 9,
    roomPrice: 65,
    offerPrice: null,
    actualPrice: null,
  },
  {
    id: 31933,
    type: "TE",
    generalType: "ENSUITE",
    detail: "Single Bed TWIN ROOM WITH PRIVATE BATHROOM",
    rooms: 7,
    roomPrice: 68,
    offerPrice: null,
    actualPrice: null,
  },
  {
    id: 31931,
    type: "TRI",
    generalType: "ENSUITE",
    detail: "Single Bed TRIPLE ROOM WITH PRIVATE BATHROOM",
    rooms: 1,
    roomPrice: 92,
    offerPrice: null,
    actualPrice: null,
  },
  {
    id: 31931,
    type: "TRE",
    generalType: "ENSUITE",
    detail: "Single Bed + Double Bed TRIPLE ROOM WITH PRIVATE BATHROOM",
    rooms: 2,
    roomPrice: 97,
    offerPrice: null,
    actualPrice: null,
  },
  {
    id: 31923,
    type: "QE",
    generalType: "ENSUITE",
    detail: " Single Bed + Double Bed QUADUPLE ROOM WITH PRIVATE BATHROOM",
    rooms: 2,
    roomPrice: 120,
    offerPrice: null,
    actualPrice: null,
  },
  {
    id: 31925,
    type: "DBE",
    generalType: "ENSUITE",
    detail: " Double Bed + Bunk Bed QUADUPLE ROOM WITH PRIVATE BATHROOM",
    rooms: 1,
    roomPrice: 110,
    offerPrice: null,
    actualPrice: null,
  },
  {
    id: 31922,
    type: "EXDE",
    generalType: "ENSUITE",
    detail: " Double Bed EXECUTIVE KING ROOM WITH PRIVATE BATHROOM",
    rooms: 1,
    roomPrice: 120,
    offerPrice: null,
    actualPrice: null,
  },
  {
    id: 448419,
    type: "TWL",
    generalType: "ENSUITE",
    detail: " Superior King Room CHAMBRE OF TWILIGHT ROOM WITH PRIVATE BATHROOM",
    rooms: 1,
    roomPrice: 125,
    offerPrice: null,
    actualPrice: null,
  },
  {
    id: 31919,
    type: "DRM",
    generalType: "Dormitory",
    detail: " Bedded Dormitory with  Private Bathrooms",
    rooms: 1,
    roomPrice: 350,
    offerPrice: 45,
    actualPrice: null,
  },
];

export const getUniqueRoomDetails = () => {
  const uniqueRoomDetails = [];
  const addedDetails = new Set();

  roomData.forEach((room) => {
    if (!addedDetails.has(room.detail)) {
      uniqueRoomDetails.push({ id: room.id, detail: room.detail });
      addedDetails.add(room.detail);
    }
  });

  return uniqueRoomDetails;
};

export default roomData;