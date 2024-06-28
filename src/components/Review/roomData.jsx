const roomData = [
  { id: 14, type: 'SS', generalType: 'BASIC ROOMS', detail: 'Single room with shared bathroom', rooms: 11, roomPrice: 48, offerPrice: null, actualPrice: null },
  { id: 14, type: 'DS', generalType: 'BASIC ROOMS', detail: 'Double room with shared bathroom', rooms: 3, roomPrice: 58, offerPrice: null, actualPrice: null },
  { id: 14, type: 'TS', generalType: 'BASIC ROOMS', detail: 'Twin room with shared bathroom', rooms: 5, roomPrice: 60, offerPrice: null, actualPrice: null },
  { id: 14, type: 'TRIS', generalType: 'BASIC ROOMS', detail: 'Triple room with shared bathroom ', rooms: 1, roomPrice: 85, offerPrice: null, actualPrice: null },
  { id: 14, type: 'DE', generalType: 'ENSUITE', detail: 'Double room with private bathroom', rooms: 9, roomPrice: 65, offerPrice: null, actualPrice: null },
  { id: 11, type: 'TE', generalType: 'ENSUITE', detail: 'Twin room with private bathroom', rooms: 7, roomPrice: 68, offerPrice: null, actualPrice: null },
  { id: 9, type: 'TRI', generalType: 'ENSUITE', detail: 'Triple room with private bathroom ', rooms: 1, roomPrice: 92, offerPrice: null, actualPrice: null },
  { id: 10, type: 'TRE', generalType: 'ENSUITE', detail: 'Triple room with private bathroom ', rooms: 2, roomPrice: 97, offerPrice: null, actualPrice: null },
  { id: 14, type: 'QE', generalType: 'ENSUITE', detail: 'Quadruple room with private bathroom ', rooms: 2, roomPrice: 120, offerPrice: null, actualPrice: null },
  { id: 14, type: 'DBE', generalType: 'ENSUITE', detail: 'Quadruple room with private bathroom ', rooms: 1, roomPrice: 110, offerPrice: null, actualPrice: null },
  { id: 14, type: 'EXDE', generalType: 'ENSUITE', detail: 'Executive King room with private bathroom', rooms: 1, roomPrice: 120, offerPrice: null, actualPrice: null },
  { id: 14, type: 'TWL', generalType: 'ENSUITE', detail: 'Chambre of Twilight room with private bathroom', rooms: 1, roomPrice: 125, offerPrice: null, actualPrice: null },
  { id: 14, type: 'DRM', generalType: 'Dormitory', detail: '12 bedded Dormitory with 3 private bathrooms', rooms: 1, roomPrice: 350, offerPrice: 45, actualPrice: null },
];

export const getUniqueRoomDetails = () => {
  const uniqueRoomDetails = [];
  const addedDetails = new Set(); // To keep track of already added details

  roomData.forEach(room => {
    if (!addedDetails.has(room.detail)) {
      uniqueRoomDetails.push({ id: room.id, detail: room.detail });
      addedDetails.add(room.detail);
    }
  });

  return uniqueRoomDetails;
};

export default roomData;
