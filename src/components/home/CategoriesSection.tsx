import { Link } from "react-router-dom";

const categories = [
  {
    name: "Bonalu",
    description: "Traditional offering songs",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBX55PP_GxNR_LjUu2o-W2hvtZoWFxxRw7msrX7RkrDqR7yERorAtD9Fs13volZjRcuaIV7jl7OmAS3CIhgfPQi1ymrka29XDc2ttwkBh9o2bd5CL2XBL-F8spCV1BH4EdXAww8C05rnZpZXZ0FlNV5gRJMs3TdtcBg01J-yYY2lRlQAZg6KJZvq-HDTXi7XXdqhQz9KqRAN5F467HsXMQ9dHfyqg3SVU1oMLsjaljQXn4UcoDBrlUWSw",
  },
  {
    name: "Bathukamma",
    description: "Floral festival rhythms",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAZ6Ua9DLzeCxicgrE37j-hOkBCAMxFmwT3W1w04k7wTa4OC7CIOaq_tI4OozuZCZuglFgZyQ5sfHGrTIM3hjFiEza1Gu5KtdThxT0-slXI6UNPllc_LFH6pwZn1ViZYAwuRAbTaYxves6__IsR-irR562m12tp8jRtAsW17QlBJAv9ow50uMO8vD96yE3DYI_QKv-D2ppg3keTIKF9TYyQepHM_Jg6aBBySUQd7gjN5C6rh46hsgiqgw",
  },
  {
    name: "Dussehra",
    description: "Victory celebration tunes",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC6JRUzTPBo9NpQnB41BzsdlqwXUmCV3fhcYNa7s8w7IjiiFQbEcCgBPx6k1q4VGcOmV-uCKUJAg-s_8LFbTJOtrGX_cjqih95LSyh1IBmY5XPLbd5s8LKgPL0rYnx_E82m_Os2FstE88Z60Meq8a0GZtB6NTTSh2O5jNcMwbNjD0MZnNHMwXBhg217FFcWkQlYetrh1F26cfMPNqSg41TbXx5BpbNgVQ0Y8SKTcjhXDm4G7X7JbDoi-g",
  },
  {
    name: "Festival",
    description: "Joyous occasion melodies",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCFFxNn2XDreiOGOnzlxytVlP8T6xSGjgkRjLswzcWQyaHQubdOzlc_XjHYbk-AJfpCcr85Guj2vXA0FpsBn5LWJUP3uT1-7NmBtK4vwgfIN1-9NUFxyA0RBgggKi-ho374ijDCuXgqSNyG2co3h0E0eHfciTOiAfOGgJTRBgyDIzP2sm25rShcAIHlZV0OudGxGySm7JSG9fnwxuIW5JMs8u929oTS36D7nm94AXI8GroUdGfGvEirSQ",
  },
  {
    name: "Marriage",
    description: "Wedding folk beats",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD1xHS9Abe5lqpdxmFHR_HY__MpVkg2ULeUFsfQ_4YDKG3Sj7aa2Ba8n6rATW9C9LEnUOw3gmjafBAwIbpl27dfe01nMo0BNImgkNr1FRvrmw-KJsqmPB5H7MQYvTTebwpwJmMppO6rVstuAACA7qMeMQZaJm3sDv3X9_8tcQGzg7E9wvVWHp81w2AJT8Jks_EmXglae3wNND0ZezfY4oSCjnXNSLcGivvbHV91aK4akAzBATbtgdObbA",
  },
  {
    name: "Devotional",
    description: "Spiritual folk hymns",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDmaSBDTdYCYHfmovNBVE0QX-5s1a4ffRGhJPlHHUqeXEUssTgTXbPXxUyQEb-foR8eIU04EMpW76D4UANLFLAJtOkQJPIy4OlToP4aw3afJKLfE3xSdKuER0i2AZEO-RUK8dVVOYSKd34zcrukPU9c6VLdAb6rGYiLDtoqhyHxZp66lK7EFiCbxTggE9ICAP9Sg6bDEfsRPegvBCSxg8G-USixvwjff5bqwfOSimjr9w_x9osaCR9mPA",
  },
  {
    name: "Traditional",
    description: "Classic storytelling songs",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAw0BacrjSjRbOjqGrOjfqhD14uQ1MnfP3zpPUhLUT5wlQBXSiiLwsFFEUD16IYSjJGjcNRx1gx3gt095roET1imzIhAmqqrOjoSsKZ8QOjTAbs8KrGx3TxizQTKv3fVZUe1_yfeJY4iLWxO8X8lmwwndHtcmzg7IUlaF7GzPJjxLtpnUsHRGqZtGr2Tjx4VB8Kt7BayZy1_I-yCyTkEzhh4F9kmI3IXfYMa2zuW_sT68BYpdvORmfbdQ",
  },
  {
    name: "Village",
    description: "Rustic daily life tunes",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA8gfKPjQOY6kEl9iN0O1iwCZ9_QvRMKVSMaLe-WgEMc_a8Wx_vl6025HZ-U9cm71AXaPTqN34xYOlFcXbG06CgWm5mRcsBkNknXToCWw0Uvg_8kpygUKscfa7UzNkz2A4e27QnwKoDALtHNpb9favQMrpqwgJM6tYJBUImtOXmEJAygv1xzhQpBGrMjiOFuak2Y8JOlvSr9-Hlfq9gBuKzyo4S8bwuiLDg681nEK1PsmhzdhpMqFI6LA",
  },
];

function CategoriesSection() {
  return (
    <section className="bg-[#F0EDED] py-20">
      <div className="mx-auto max-w-[1280px] px-5 md:px-14">

        <h2 className="mb-12 text-center font-serif text-3xl font-bold text-[#570000] md:text-4xl">
          Explore Folk Categories
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.name}
              to="/categories"
              className="group block"
            >
              <div className="relative mb-4 aspect-square overflow-hidden rounded-[24px] border border-[#DBC18D]">

                <img
                  src={category.image}
                  alt={`${category.name} Telangana folk culture`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/20 transition group-hover:bg-transparent" />

              </div>

              <h3 className="font-serif text-xl font-semibold text-[#570000]">
                {category.name}
              </h3>

              <p className="mt-1 text-sm leading-6 text-[#5A413D]">
                {category.description}
              </p>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

export default CategoriesSection;