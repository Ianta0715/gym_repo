import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  user: null,
  isLogged:false,
  appointments: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
     state.user = action.payload;
     console.log(action.payload);
     
     state.isLogged = true;
    },        
    setUserAppointments: (state, action) => {
      state.appointments = action.payload;
    },
    addUserAppointment: (state, action) => {
      
      state.appointments.push(action.payload);
    },
    removeUserAppointment: (state, action) => {
      state.appointments = state.appointments.filter(
        appointment => appointment.AppointmentId !== action.payload.AppointmentId
      );
    },
    cancelUserAppointment: (state, action) => {
      state.appointments = state.appointments.map(appointment =>
        appointment.AppointmentId === action.payload.AppointmentId
          ? { ...appointment, status: 'cancelled' }
          : appointment
      );
    },
  },
});

export const {
  setUser,
  addUserAppointment,
  cancelUserAppointment,
  removeUserAppointment,
  setUserAppointments,
} = userSlice.actions;
export default userSlice.reducer;
