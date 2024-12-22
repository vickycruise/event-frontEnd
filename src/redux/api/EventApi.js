import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const eventsApi = createApi({
  reducerPath: "eventsApi", // Unique key for this API
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/events" }),
  tagTypes: ["Event"], // For cache invalidation
  endpoints: (builder) => ({
    getAllEvents: builder.query({
      query: () => "/",
      providesTags: ["Event"],
    }),
    getEventById: builder.query({
      query: (id) => `/${id}`,
      providesTags: (result, error, id) => [{ type: "Event", id }],
    }),
    createEvent: builder.mutation({
      query: (newEvent) => ({
        url: "/create",
        method: "POST",
        body: newEvent,
      }),
      invalidatesTags: ["Event"],
    }),
    updateEvent: builder.mutation({
      query: ({ id, updatedEvent }) => ({
        url: `/${id}`,
        method: "PUT",
        body: updatedEvent,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Event", id }],
    }),
    deleteEvent: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [{ type: "Event", id }],
    }),
  }),
});

export const {
  useGetAllEventsQuery,
  useGetEventByIdQuery,
  useCreateEventMutation,
  useUpdateEventMutation,
  useDeleteEventMutation,
} = eventsApi;
