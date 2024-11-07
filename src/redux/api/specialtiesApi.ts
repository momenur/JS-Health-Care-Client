import { baseApi } from "./baseApi";
import { tagTypes } from "./tag-types";

const specialtiesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createSpecialty: build.mutation({
      query: (data) => ({
        url: "/specialties",
        method: "POST",
        contentType: "multipart/form-data",
        data,
      }),
      invalidatesTags: [tagTypes.specialties],
    }),

    getAllSpecialty: build.query({
      query: () => ({
        url: "/specialties",
        method: "GET",
      }),
      providesTags: [tagTypes.specialties],
    }),
  }),
});

export const { useCreateSpecialtyMutation, useGetAllSpecialtyQuery } =
  specialtiesApi;
