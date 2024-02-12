import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const productApi = createApi({
    tagTypes: ['products'],  //les tags permettent de mettre à jour les datas en temps réel ça refait un fetch
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://iim.etherial.fr' }),
    endpoints: (builder) => ({
      getProducts: builder.query({
      //   query: (name) => `pokemon/${name}`,
          query: () => `/products`,
          providesTags: ['products'],
      }),
      getComments: builder.query({
          query: (id) => `/products/${id}/comments`,
          providesTags: ['products'],
      }),
      

      createComment: builder.mutation({
          query: (data) => ({
              url: `/products/${data.productId}/comments`,
              method: 'POST',
              body: data,
          }),
          invalidatesTags: ['products'],
      })
    }),
  })

  export const { useGetProductsQuery, useGetCommentsQuery, useCreateCommentMutation } = productApi

//query = get
//mutation = post, put, delete