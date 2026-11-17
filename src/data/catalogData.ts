export interface WatchCategory {
  slug: string;
  name: string;
  group: string;
  description: string;
  order: number;
  count: number;
  coverImageId: string;
}

export interface WatchModel {
  id: string;
  name: string;
  categorySlug: string;
  categoryName: string;
  priceUsd: number;
  movement: string;
  strap: string;
  waterResistance: string;
  images: string[];
  featured: boolean;
}

export function getDriveImageUrl(fileId: string, width: 480 | 800 | 1000 = 480): string {
  return `https://lh3.googleusercontent.com/d/${fileId}=w${width}`;
}

export const WATCH_CATEGORIES: WatchCategory[] = [
  {
    "slug": "casio",
    "name": "Casio",
    "group": "Clásicos & Digital",
    "description": "Modelos retro y digitales con estética inconfundible.",
    "order": 1,
    "count": 22,
    "coverImageId": "13ke0vQvly_vdoshJ9ZxkkUT0wuBao-25"
  },
  {
    "slug": "rolex",
    "name": "Rolex",
    "group": "Alta Gama",
    "description": "Íconos clásicos en acero oyster y terminación espejo.",
    "order": 2,
    "count": 8,
    "coverImageId": "1-gWg4lQ-GjapN87BibUtYRRL3gDoFQj1"
  },
  {
    "slug": "audemars-piguet",
    "name": "Audemars Piguet",
    "group": "Alta Gama",
    "description": "Bisel octogonal emblemático y presencia arquitectónica.",
    "order": 3,
    "count": 7,
    "coverImageId": "15MgGECX4aY-j2k5_SCf4eGcO1RaQGPbR"
  },
  {
    "slug": "patek-philippe",
    "name": "Patek Philippe",
    "group": "Alta Gama",
    "description": "Elegancia deportiva y líneas atemporales de colección.",
    "order": 4,
    "count": 11,
    "coverImageId": "1US3ona2MyUr4zJ3_4RrLsZUMDRHTqMnE"
  },
  {
    "slug": "omega",
    "name": "Omega",
    "group": "Alta Gama",
    "description": "Precisión náutica y cronógrafos de alto contraste.",
    "order": 5,
    "count": 7,
    "coverImageId": "1zH_84N4P19J_mrrrwGnihGOPkv0L2Mem"
  },
  {
    "slug": "tag-heuer",
    "name": "TAG Heuer",
    "group": "Alta Gama",
    "description": "Espíritu automovilístico con cronógrafo deportivo.",
    "order": 6,
    "count": 4,
    "coverImageId": "1rsa8h_N9M0bgX9_QEV33LVQsFLL4aNnu"
  },
  {
    "slug": "hublot",
    "name": "Hublot",
    "group": "Alta Gama",
    "description": "Diseño vanguardista de fusión deportiva.",
    "order": 7,
    "count": 4,
    "coverImageId": "1SLLFB8RD1eUQeegB_MPDLmEw2YRcsW1b"
  },
  {
    "slug": "tissot",
    "name": "Tissot",
    "group": "Clásicos Suizos",
    "description": "Diseños PRX y 1853 de perfil delgado y versátil.",
    "order": 8,
    "count": 5,
    "coverImageId": "1wTWpFPLfBLdnPNvTgQ786ObqPnlVwEnv"
  },
  {
    "slug": "g-shock",
    "name": "G-Shock",
    "group": "Deportivos",
    "description": "Resistencia extrema para uso diario e intensivo.",
    "order": 9,
    "count": 1,
    "coverImageId": "1qnR0gDgtkXHKkvpfOuq9fCmGiKkxomm5"
  },
  {
    "slug": "poedagar",
    "name": "Poedagar",
    "group": "Elegancia Moderna",
    "description": "Excelente relación precio-calidad con estética ejecutiva.",
    "order": 10,
    "count": 11,
    "coverImageId": "1alSj2Gfkkt9eDQXqueib4aGPAhYrQRQK"
  },
  {
    "slug": "chenxi",
    "name": "Chenxi",
    "group": "Elegancia Moderna",
    "description": "Esferas limpias y mallas metálicas para todos los días.",
    "order": 11,
    "count": 31,
    "coverImageId": "10hlJxTPudOvnW_STK00P4gqiFrCLE_OE"
  },
  {
    "slug": "tomi",
    "name": "Tomi",
    "group": "Urbanos",
    "description": "Diseños modernos en acero, cuero y esfera mecánica.",
    "order": 12,
    "count": 20,
    "coverImageId": "1aIsr2uenLEM6eM1RgZsadF5YUm4fehBi"
  },
  {
    "slug": "sanda",
    "name": "Sanda",
    "group": "Deportivos",
    "description": "Relojes deportivos tácticos con doble lectura.",
    "order": 13,
    "count": 4,
    "coverImageId": "1j3zfB0sEBk99jSCdaH0zkqKiU2Xqd7Xl"
  },
  {
    "slug": "lacoste",
    "name": "Lacoste",
    "group": "Urbanos",
    "description": "Estilo casual refinado de perfil liviano.",
    "order": 14,
    "count": 1,
    "coverImageId": "1Px0j3zlXq8avO59DZKs6BmJhR-XdW3iM"
  },
  {
    "slug": "sucess",
    "name": "Sucess",
    "group": "Urbanos",
    "description": "Modelos contemporáneos versátiles para uso diario.",
    "order": 15,
    "count": 2,
    "coverImageId": "1eioLQ6jHx7PKsPObvbHLVgLkuorZjLCE"
  },
  {
    "slug": "smartwatches",
    "name": "Smartwatches",
    "group": "Tecnología",
    "description": "Conectividad inteligente, notificaciones y monitoreo.",
    "order": 16,
    "count": 3,
    "coverImageId": "1uozvUaiAu4t3d7DqhgNT8vNK2o9quQEP"
  },
  {
    "slug": "acero",
    "name": "Línea Acero",
    "group": "Malla de Acero",
    "description": "Amplia variedad de modelos con malla de acero.",
    "order": 17,
    "count": 49,
    "coverImageId": "1yCsNiw4b3OSX0BvaOLbAHpo89UjScqcJ"
  },
  {
    "slug": "metal",
    "name": "Línea Metal",
    "group": "Malla Metálica",
    "description": "Acabados metálicos clásicos y minimalistas.",
    "order": 18,
    "count": 42,
    "coverImageId": "1ZLdS3RqTXdtlRUMPx622eZQ6Iki_g1X4"
  },
  {
    "slug": "deportivos",
    "name": "Deportivos",
    "group": "Deportivos",
    "description": "Cronómetros digitales y correas de resina o silicona.",
    "order": 19,
    "count": 38,
    "coverImageId": "1i1BssxOLuPdBZfTFTIuMyntfZPJpuX7E"
  },
  {
    "slug": "mas-modelos",
    "name": "Más Modelos",
    "group": "Nuevos Ingresos",
    "description": "Novedades y ediciones seleccionadas recién ingresadas.",
    "order": 20,
    "count": 5,
    "coverImageId": "1PU3RDMZQfjVmOd0xkOiJ7XghRcHTDgPi"
  }
];

export const WATCH_MODELS: WatchModel[] = [
  {
    "id": "mas-modelos-13DDa_9B",
    "name": "M 85",
    "categorySlug": "mas-modelos",
    "categoryName": "Más Modelos",
    "priceUsd": 55,
    "movement": "Cuarzo de Precisión",
    "strap": "Aleación metálica",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1PU3RDMZQfjVmOd0xkOiJ7XghRcHTDgPi",
      "1fuD2lZnmfPLnmLUCv_PLb2OKxatH1yTA",
      "1CBbciZZfJ2Ub75MYvlevuEVP36pJEH2n"
    ],
    "featured": false
  },
  {
    "id": "mas-modelos-1sL-c8aI",
    "name": "M 113",
    "categorySlug": "mas-modelos",
    "categoryName": "Más Modelos",
    "priceUsd": 57,
    "movement": "Cuarzo de Precisión",
    "strap": "Aleación metálica",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1vderaRZjAO52GbRo8MBp2PkMH5lwQAX3",
      "1xbPPhTqz1lORvm-965G5UFkzTGja-3XK"
    ],
    "featured": false
  },
  {
    "id": "mas-modelos-1nZXofvR",
    "name": "M 452",
    "categorySlug": "mas-modelos",
    "categoryName": "Más Modelos",
    "priceUsd": 59,
    "movement": "Cuarzo de Precisión",
    "strap": "Aleación metálica",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1-5FNOKBRz6Km8yqwNmGe6Rx1DTDgYBvn",
      "1h2EIE5hZvZUEcz8sE7gcpLXKnkkuM5eZ",
      "1R9jKiO9Os5lT_MSsyvpAEr3uPuuQIR8q",
      "1Nqib1_cRAJ_LkNOZyIOiQZi_L-0iSiaR",
      "16sFoxvBtM8Be1UDqPE7f6KyUomraxZHD"
    ],
    "featured": false
  },
  {
    "id": "mas-modelos-1oEhcoP0",
    "name": "M 459",
    "categorySlug": "mas-modelos",
    "categoryName": "Más Modelos",
    "priceUsd": 61,
    "movement": "Cuarzo de Precisión",
    "strap": "Aleación metálica",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1I0YMMWySUwSnSBgNCaAP7LgkZLTVHLPd",
      "1jHd-OTaN5Yrlj13RD40S1srKlxS0J2TQ",
      "1Kgipjh92krpc6OAPeO4y-3SXVnVnZkTy",
      "1eKULtTWy_-L_zMN7MJtws8IVdxo_Daxw",
      "1XbF9ogBFutuEO84M9rZJK1DdQ5LpP919",
      "1DW0WrEtmWaJJsvsibb_JNx5WOQeeUnVO",
      "1HEvl8Z3vjFNqQMri9Mr-oHwDUwRLM3cx"
    ],
    "featured": false
  },
  {
    "id": "mas-modelos-1syOC76_",
    "name": "M 460",
    "categorySlug": "mas-modelos",
    "categoryName": "Más Modelos",
    "priceUsd": 63,
    "movement": "Cuarzo de Precisión",
    "strap": "Aleación metálica",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "17WsY7vG0OMOJccOD0y22JLHTlO-kPrW-",
      "14tn8mc56YDmUWEZdcNOK5WVXfpYMjKEr",
      "1CYS38rY-fOycnuVO5QI3-EMmP2N4DV98",
      "1N4_KeSdkEVkxixjOPqSiAS-5jV1H8Z5d",
      "14PwBf6qUcyFEY2m6YHf41GH7n3hNqc0m",
      "18jy3GS_X5n2So4T3BJ1-nIz7rbWpsGJT",
      "1AeJN3YkDQYgQ-bIdtjGWWEbHGo2j9oor",
      "18sqr92S_DBbF0cekNwZr_CgtzcHvMdEV"
    ],
    "featured": false
  },
  {
    "id": "acero-1r1urXSZ",
    "name": "M 55",
    "categorySlug": "acero",
    "categoryName": "Línea Acero",
    "priceUsd": 49,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1yCsNiw4b3OSX0BvaOLbAHpo89UjScqcJ",
      "1mNL2I27AAruSg457cePUw1-ULjTf3bdS",
      "1Ag--wU2Rd-Nr11w--XdWNS_NYTzgVI8w"
    ],
    "featured": false
  },
  {
    "id": "acero-1-MMazjS",
    "name": "M 56",
    "categorySlug": "acero",
    "categoryName": "Línea Acero",
    "priceUsd": 51,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1tVCpmKRRNAz20c7CEFGGOH15wl2LiU3J",
      "1SdFAlNFZKjB_1HSAjCf5qKINbZHxM6yq",
      "1GQTDp_FV0bhq-WzAo649jAB7N0hKQaIB"
    ],
    "featured": false
  },
  {
    "id": "acero-12vvM7CD",
    "name": "M 57",
    "categorySlug": "acero",
    "categoryName": "Línea Acero",
    "priceUsd": 53,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1MWt-2FtC_LflcYRoaCrLIIP7Qhp8FLHE",
      "1gyCCANMZ9xG1AiC3ShUnWQxUWHLpbO3g",
      "1FcDPd3Yexlof1bdafkOtGzGT5mKMSt1L"
    ],
    "featured": false
  },
  {
    "id": "acero-107JxoAB",
    "name": "M 58",
    "categorySlug": "acero",
    "categoryName": "Línea Acero",
    "priceUsd": 55,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1ndxoafPdlfz6Z3DH2-uTENL7PSlLdSwQ",
      "1pycdiYpso31_hNqHIUUUSVwYe0V4f_ll",
      "10Y2owwllXGVB3csC9yd8_GM7ZOVeJEZG"
    ],
    "featured": false
  },
  {
    "id": "acero-1AFPUtmI",
    "name": "M 59",
    "categorySlug": "acero",
    "categoryName": "Línea Acero",
    "priceUsd": 57,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1J6YX17-GbUSOo6r0RSMKHO2NP1lgG_On",
      "1wiXHLaq-vGePCA5V7UdlA9pQlUA2Ul4W",
      "1Lktx19UBQRWF6HTQcNgdriNoV2pIu45H",
      "1d2iYVHJWud73AOTec7MQCbX8ATStlOkL",
      "1X69DKneFyBAfEpYdPKJVayL_rG5k2P26",
      "12DS4pL592HeHnqK51YP_-eT-a8U7TPyQ"
    ],
    "featured": false
  },
  {
    "id": "acero-1GO-HgOr",
    "name": "M 87",
    "categorySlug": "acero",
    "categoryName": "Línea Acero",
    "priceUsd": 49,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1qKUJpzjWcx89z71DCxmCr57CIeGrhizf",
      "1nOEdgYZoD2hQFPIpfD1xH9RWviUcAlDx",
      "1vsaRceSFrEd8aS8HlwqYEKJ50wYh8rkb",
      "1xV2TRUyj8WtNp6U0qTwuLDGpIn3FrgLt",
      "1A0h-rAo0fpw-pJHNKRy01o8xuDToFDca",
      "1MhjgIA89LKjZ3QjfB8Wc1K3ToVTktjtV",
      "1Bj9R-1y-Pc56YMWLhX-_FT_OYhXDnsh9"
    ],
    "featured": false
  },
  {
    "id": "acero-1MY0DCZ6",
    "name": "M 90",
    "categorySlug": "acero",
    "categoryName": "Línea Acero",
    "priceUsd": 51,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1_Bha-kLeXXC__rd8Ju67rWiw6VDlEKKg",
      "1ZbmYs8_4qQODVrkLKkKKW2aDfQhjI7rb",
      "1kq0mc9M4o2fmDYLieMLiPBZNbQJ163kB",
      "15kzpsn23bwqFHrD8dFF77Xr3OX70A6fu"
    ],
    "featured": false
  },
  {
    "id": "acero-1DQU7e0S",
    "name": "M 94",
    "categorySlug": "acero",
    "categoryName": "Línea Acero",
    "priceUsd": 53,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1xJhdxoPyAI102RtPlP9NB3kJ2fAeGbcO",
      "1PYkMrHyZKMVs78y-77P3h2AN6f0dUQIk",
      "1-zIqSmijD0aB6n5o82K3BQ9YJlJ-iIjg"
    ],
    "featured": false
  },
  {
    "id": "acero-1HH7EmEQ",
    "name": "M 95",
    "categorySlug": "acero",
    "categoryName": "Línea Acero",
    "priceUsd": 55,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1hU-rAlVKYeJNmi89OnmBv7aT1Z4jMT33",
      "1772JLAM5EyJMH-a7HkJs6WirRyP0STdJ",
      "11a37cIyGvdpsr1eahe1RJVarWtZLQ1HB",
      "1TCbwhgYmwUf5jIJ6gIry8TOET4tvKs0m"
    ],
    "featured": false
  },
  {
    "id": "acero-1GSI4O4D",
    "name": "M 96",
    "categorySlug": "acero",
    "categoryName": "Línea Acero",
    "priceUsd": 57,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1UZJf0FBPsoAVPzJgr4PAX9RSsfFky1Zw",
      "153R50Bmn-PjkUOGijPr-bQ0C73qZD5Yq",
      "1XH37rpnLIuWwcyjkujXji4HRjkn2ZWUO"
    ],
    "featured": false
  },
  {
    "id": "acero-1gDJ2mk4",
    "name": "M 106",
    "categorySlug": "acero",
    "categoryName": "Línea Acero",
    "priceUsd": 49,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1aBTa1j3UrzAmvQOx1IihSRsI5xqZFxFn",
      "1E9ZOiioQD54ksR_hpLKxAb5oiKs02Ewj",
      "14oZMmGdtHx7q_EL3mVH79_yMRte8LWG1",
      "1v4scVZIpWQf9kUsFYgu1hnDgRDnxm51-",
      "1vvoT_rwgVjpqvz3BjCXLTxHQBcJYQSWL",
      "1HesWWKDdqG95ES7B5935dEktI36NIohL"
    ],
    "featured": false
  },
  {
    "id": "acero-1neuguy_",
    "name": "M 107",
    "categorySlug": "acero",
    "categoryName": "Línea Acero",
    "priceUsd": 51,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1RW2zye2sUgNObtiolf5DnqIlc0-GQHHk",
      "1YiQ_ogvtS3XWxjoDZ7PppPillK4rGOZY",
      "1Qnw0wA1ArIi91c47FGzPxlPWx1Sb4a-h",
      "1kL8g8r3iDF4tRAXRIPg-3RmqqYnXqfcw",
      "1SvM26NYio9FYNZ-Bxm_uqzExEkSnMYqB",
      "1Z1qxUcEoU0NqeVBfybigIMzVvFgEN6qH"
    ],
    "featured": false
  },
  {
    "id": "acero-1UhcEwDm",
    "name": "M 115",
    "categorySlug": "acero",
    "categoryName": "Línea Acero",
    "priceUsd": 53,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1RM1feqV60mtLySsOblAQtt-iCGmKgFvr",
      "1H5as7Atz-lW-5PtIwYQdBk4W7VvxDr0i",
      "1xyIdLXGyI4uuZB7swsHknFL27jPqt-5c",
      "17gGl7bINMHNKB9oiXHKOK0M_9Hgr2Xzz"
    ],
    "featured": false
  },
  {
    "id": "acero-1La4rB7m",
    "name": "M 116",
    "categorySlug": "acero",
    "categoryName": "Línea Acero",
    "priceUsd": 55,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1oSU6m4AwXtwvTYz6bNhahSE-J9vEVTx3",
      "1TEGIKG-OoqJdlBfwZaWt-9jQOSZYZA9F",
      "1XH7RYAwtEr79ENsmubVZOX8nslbHSyvG",
      "1PdIT7Ta6DD2e8hG0Mj4-3AwRMNJIiSan"
    ],
    "featured": false
  },
  {
    "id": "acero-10J_GCdj",
    "name": "M 117",
    "categorySlug": "acero",
    "categoryName": "Línea Acero",
    "priceUsd": 57,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1-cLXeJlYEa39UPRZTdTe89lJAkMUzIZ3",
      "1OtK1GO90Y8mlpfX8NKhMvUfPUKvogLld",
      "1Imb13i7KRn94agLFHJnlnu-nMZdBbyhc",
      "1d_RvlWuE4wVkmLJPNOHGoDhCzd8it5Ng"
    ],
    "featured": false
  },
  {
    "id": "acero-1jOHcWCt",
    "name": "M 119",
    "categorySlug": "acero",
    "categoryName": "Línea Acero",
    "priceUsd": 49,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "174HsiQMsiD2rnxAhP9ilFlFCng9KDgYv",
      "1MRhf7Mob1YhKPvracZjX7JE5XuPBMk1d",
      "1mvooxy8u3MS8UT5hEez8Qd2G9VBeUpWO"
    ],
    "featured": false
  },
  {
    "id": "acero-1EKSCFx2",
    "name": "M 120",
    "categorySlug": "acero",
    "categoryName": "Línea Acero",
    "priceUsd": 51,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1H2_zd9u6WqYtzf6Z7KyUxE9l2YuTuNGx",
      "1MGK_Jja6zy2f8zLKVIu1LFe_zI3Hxejm",
      "1rDJyl69UdWt_F6Mwyn848ybOH8kFzY6Q"
    ],
    "featured": false
  },
  {
    "id": "acero-1MHpoMJJ",
    "name": "M 211",
    "categorySlug": "acero",
    "categoryName": "Línea Acero",
    "priceUsd": 53,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1QD_-ymevQqnMcx_1vieRwZ3NIT5aZxc0",
      "18MPA4NvabMxK3cJzHTY_s7R7J0CDr9qB",
      "1IHumk0OoZ1FovIrxnyS4hh0E5pjU9i5M",
      "1NwE4C3Qi8GyWFWEP6acojtpC0eVEeID3"
    ],
    "featured": false
  },
  {
    "id": "acero-1Ga9mRRc",
    "name": "M 216",
    "categorySlug": "acero",
    "categoryName": "Línea Acero",
    "priceUsd": 55,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1sX2qsxthnVF5OHkNqGYC3JjJ8VzlTkrU",
      "1Ho7w_EYFAwhIjToSan8WrDOZmM_xBlSJ",
      "1LD1OmSgcevsKQh38T6s80LSe8kfPdO8E"
    ],
    "featured": false
  },
  {
    "id": "acero-151Map-B",
    "name": "M 217",
    "categorySlug": "acero",
    "categoryName": "Línea Acero",
    "priceUsd": 57,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1Bc7tVq6bJKZVvbSoTVPntZ6vL4rXKIt0",
      "1HQz7HQcn2P5iF_W25wbRljH5WULKQc11",
      "12xcTU7_Kane106mUpWUM4cziF9tlVMJ6"
    ],
    "featured": false
  },
  {
    "id": "acero-1PoIX468",
    "name": "M 218",
    "categorySlug": "acero",
    "categoryName": "Línea Acero",
    "priceUsd": 49,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1CQ0UbhEHK8nZfHuVWTpop26jCpBBvUzi",
      "14b0DBj-lo1UQXKIbAqR9qq5ToS4tcLbA",
      "1kxlleIgL_ccUDyjuAUc_jMyln8Ae3M5L"
    ],
    "featured": false
  },
  {
    "id": "acero-1M4cNXwU",
    "name": "M 219",
    "categorySlug": "acero",
    "categoryName": "Línea Acero",
    "priceUsd": 51,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1QGB5CAw7vOFTyqOrRtGMPJDM1tz8Tt7L",
      "1LleLafEN2baWvk67UZKfwa24tYgOglgS",
      "1sBdl17FRwA1lyMnizx15Cln5rczo5SL0"
    ],
    "featured": false
  },
  {
    "id": "acero-1nkBNaez",
    "name": "M 222",
    "categorySlug": "acero",
    "categoryName": "Línea Acero",
    "priceUsd": 53,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1R5D3dB763CsFwPgCjj63o26To0K2id7m",
      "1WgoGKjzL1Vzk36rYWvq-_lkKJemfs0mr",
      "1L_B4oex4Dfem8JxqePFZmhclDLwsBhHe",
      "1t-s2d8CUj0Sis-c5BdMP_2mu2MSoVm7_",
      "19YMhqt2AHMOpFHqpW-h-7VdDsRHl5zzX"
    ],
    "featured": false
  },
  {
    "id": "acero-1SPPQ3aY",
    "name": "M 232",
    "categorySlug": "acero",
    "categoryName": "Línea Acero",
    "priceUsd": 55,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1Zpql2HVWyuZqfwMEqE-xvN10WKygkXeb",
      "1tsO9b7uvfFj6lcIdEsHVLFTAm25JNp7b",
      "1aLGAG2O36hCv6QHXfkhpVeIhXqz7dIgX"
    ],
    "featured": false
  },
  {
    "id": "acero-1T5SmJmI",
    "name": "M 233",
    "categorySlug": "acero",
    "categoryName": "Línea Acero",
    "priceUsd": 57,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1AzJqzeBZjn7MvTTR193nR8gzM8Qbk9kZ",
      "1dOST0end4FBti0_NclNrT0cuY-z5vm_u",
      "1G7b6YVZWUBaEYG7C0NBWC-5lxZCGGW3k"
    ],
    "featured": false
  },
  {
    "id": "acero-1vNpoKqp",
    "name": "M 234",
    "categorySlug": "acero",
    "categoryName": "Línea Acero",
    "priceUsd": 49,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1Fi8sT1wetw0ZyBKup_nu2KLNqnpHipQd",
      "1m5IX1er7eunHUxOVZZz4L3QqwrcPo_hE",
      "1ziNTHKojWc4jynoySDGpBvGfCqOUBeiv"
    ],
    "featured": false
  },
  {
    "id": "acero-11EBmlY8",
    "name": "M 245",
    "categorySlug": "acero",
    "categoryName": "Línea Acero",
    "priceUsd": 51,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "19qHpW1SQLTCjzf9RavQEn4ybmAMAtUnr",
      "1ouaSKQ9U3IUiBo3W4Jb9P6boxu6sgzoC",
      "1SNdWCoe56N5CCzIs_PSBRNW3ilrthLLv",
      "1tL73yuTfRqSJhjtjRJ9cR8Nk2URhck10",
      "13bB7aMFD6VP1vhDlQVn3UAiWuh2IAxPM"
    ],
    "featured": false
  },
  {
    "id": "acero-1mftDhOb",
    "name": "M 246",
    "categorySlug": "acero",
    "categoryName": "Línea Acero",
    "priceUsd": 53,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1h37_FffSg3zCLYJqLgkFBdtl6aChGeVI",
      "1d_tVltJ9aoc5gr8dVtXGJW_MHPHYNih_",
      "15K8byr4hPVosxvNLjQEd7SSoYbLIE1X5",
      "1fiIpD87SUcpNss1JPxeGRFOLBwCGWlyz"
    ],
    "featured": false
  },
  {
    "id": "acero-1TFxxVqW",
    "name": "M 247",
    "categorySlug": "acero",
    "categoryName": "Línea Acero",
    "priceUsd": 55,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1oPz6HtBJ52vpsPu60rnX1wwym28xF0yw",
      "1auefgZeFWEGKpeNn0PGDrGD1ra7BRFB7",
      "1XmJF2UabpuzwTPrwcl7FEdlQ14FMYpH_"
    ],
    "featured": false
  },
  {
    "id": "acero-1F_LrXFI",
    "name": "M 248",
    "categorySlug": "acero",
    "categoryName": "Línea Acero",
    "priceUsd": 57,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1bOPpIJYj4FgFARpVZaE-LUpVYsaR7x4V",
      "1CTA_Bi5h4cHThwcZwuybIlfM9pIbQ_tE",
      "11wjtDwLlV3ETMJ296ZJVNzzLpi6yY2Xl",
      "1_uS5BubQwLxBMgFtNcwK-y27jkS8Bige",
      "1yFOKXKmaXV1CTU78F-yX1RD8TJmmVko7",
      "1gcHUa9Jl1dCex0wqNWhGuavkvWKS_kpL"
    ],
    "featured": false
  },
  {
    "id": "acero-1WRCyl8i",
    "name": "M 273",
    "categorySlug": "acero",
    "categoryName": "Línea Acero",
    "priceUsd": 49,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "17N4OlYm6sTD5wlacD8xle7a4p1SPHoxa",
      "1BQv7aDLUQScQk7EBrRCN7_lgJirfHdMW",
      "1hTllX6i4E0sZVIsG-bJ5WWt_SF1B9_hm"
    ],
    "featured": false
  },
  {
    "id": "acero-1Ie0hL1W",
    "name": "M 274",
    "categorySlug": "acero",
    "categoryName": "Línea Acero",
    "priceUsd": 51,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1njMnGCrPXfel1f4aBdSm06FM_NxfgbDz",
      "1exoafcoBMFFVsqeqdjX-3a8psAxFTED-",
      "1cdGTzweTptxxVBAS35z-KU6UbPjMqq1D"
    ],
    "featured": false
  },
  {
    "id": "acero-13a1sjKh",
    "name": "M 275",
    "categorySlug": "acero",
    "categoryName": "Línea Acero",
    "priceUsd": 53,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1HhrpkhFKVf83RfE3eR4lX22IGe4zEoPz",
      "1uakD9fpuFL8IANN8JKMH3Rki_KiFjd4U",
      "11_YhCXH-JDaTD451-NWkf-B25ZXoA-9A"
    ],
    "featured": false
  },
  {
    "id": "acero-1JnyCKuc",
    "name": "M 276",
    "categorySlug": "acero",
    "categoryName": "Línea Acero",
    "priceUsd": 55,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "18cRLikJG3zW-Jw6t2hK_zd-0AjPOXR9i",
      "15rwsg6V0MWwQw9KfQ15kPZijQgWMvapf",
      "1YmCUS777UD2MDvtMTCsJYF4cAzW2Gn7z"
    ],
    "featured": false
  },
  {
    "id": "acero-1mFekZgG",
    "name": "M 281",
    "categorySlug": "acero",
    "categoryName": "Línea Acero",
    "priceUsd": 57,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1NnQOy0_OgMvblzaZPisiHHctmzs-BcRh",
      "1WnqLkUO9U7bzTWxbynBLhMxH4TLjfj_L",
      "1MXwpbXKu712o4goc2xUlFH7mqowX5Hd6",
      "1nvF2vNuaMGVd8LGqCk-7BbXD3hIZDvEw"
    ],
    "featured": false
  },
  {
    "id": "acero-1N8T1_m3",
    "name": "M 282",
    "categorySlug": "acero",
    "categoryName": "Línea Acero",
    "priceUsd": 49,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1UonoSFfEpupqI0bmKKWYJCVcjT6668GS",
      "17aKtL1SIbg9_H38nqefrXSvp4wq9mi4t",
      "1Nv4LwsRXJfVGuqSTuha1nRFHQAidqb5Z",
      "1O4NSIcGDH9t5BeJpqPnAFhoBo61HRAcS"
    ],
    "featured": false
  },
  {
    "id": "acero-10S9uDQm",
    "name": "M 283",
    "categorySlug": "acero",
    "categoryName": "Línea Acero",
    "priceUsd": 51,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1VlE-qZf8d6Qk6VA-MBQ3Fv_G4HWdrvtS",
      "1aBykarBS0JNZ6asBeZVkguRGVdM_ejoM",
      "1MYCc1KwSrZPOSyfnCetGSioQCtx1oYlk",
      "1p2I21nmdkhRqwF880XpIctHbocaKZB-p"
    ],
    "featured": false
  },
  {
    "id": "acero-1lGUkUJP",
    "name": "M 284",
    "categorySlug": "acero",
    "categoryName": "Línea Acero",
    "priceUsd": 53,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1tWy7YoZm4wHju_nTXKlvYTyg8JtuD26v",
      "1xfjjglYX371X7YBg1-B_PMvP7rG5Rwyq",
      "144R4Ra7r2oqsV7uvvIeLmUoXJD5VPOY7",
      "1jBLDtz91zH_Uvi1uQN0t6RSXsyuRbOYI"
    ],
    "featured": false
  },
  {
    "id": "acero-1YPAJO26",
    "name": "M 292",
    "categorySlug": "acero",
    "categoryName": "Línea Acero",
    "priceUsd": 55,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1WpV6bLOr0XPt8kUqbsICaa54zJwIEhrZ",
      "196BtFlJDRo731gwjuWFC4-h1z0y93wne",
      "1mo93zp11v5r71GOS0HpZkyJ454Aemz3Y"
    ],
    "featured": false
  },
  {
    "id": "acero-1CZqhl2V",
    "name": "M 293",
    "categorySlug": "acero",
    "categoryName": "Línea Acero",
    "priceUsd": 57,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1S04Ke7ltWZOKJOqNH2gWlUmpoGgwUUdy",
      "1kvdGj8Fww3sP1bfpSintabuFDtYr5EHl",
      "1iDBuCegdnRhKVsff9S2XiB6PGyMoO3EB"
    ],
    "featured": false
  },
  {
    "id": "acero-1YeHGwL-",
    "name": "M 294",
    "categorySlug": "acero",
    "categoryName": "Línea Acero",
    "priceUsd": 49,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "12UqBg80wGG47N_mkvWOyqNZN8yYDlMrZ",
      "1kESyY6xzHQe0ieC17UPuSn6pt1oj_oYG",
      "1VzMTVo7IbTlSR0D5SUaV2qDATlxZPTjT",
      "1SsVchnAfSqycukC_ucfSzcYHnbFJo3Di",
      "1hQzcKwpjZFXW8wq6uaDzzTA-zKr_-zrO",
      "1usJDZNSAkDMjW9aFMuVXaUkb1YTMXcYk",
      "1_kLR3975LPZXyo1bycRMpTa4m41snKGy",
      "1M7KTR-M_26v1zXWMsCLhgWTF1_-Yq_ub",
      "1WMIVE7yFPDPu21h34gbIQXhNbmnrqW_H"
    ],
    "featured": false
  },
  {
    "id": "acero-1pELGHnj",
    "name": "M 295",
    "categorySlug": "acero",
    "categoryName": "Línea Acero",
    "priceUsd": 51,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1Hz9oJIE1q3U99UmYkupn-gf131BWRJcf",
      "1SP0bxtb5mR-T18znNFupXTjthf5mp1yD"
    ],
    "featured": false
  },
  {
    "id": "acero-1WGRjUL8",
    "name": "M 296",
    "categorySlug": "acero",
    "categoryName": "Línea Acero",
    "priceUsd": 53,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1LYkQXn_zUoVwXVTvxJEJKrpxHyVMqHeK",
      "1W3MvfNZtfVRYz7EntcbraaMZQpefdavT"
    ],
    "featured": false
  },
  {
    "id": "acero-1LCLDpbK",
    "name": "M 424",
    "categorySlug": "acero",
    "categoryName": "Línea Acero",
    "priceUsd": 55,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1dFuXf1AgY8KBa4RM53uFZBCiAUELZ_4e",
      "1ZTYp3xfV2jgZzjEzh2NjMo_49or8F69V",
      "1EYizQVuTXf_X3e-j1cwg_3h5b81XBxB2"
    ],
    "featured": false
  },
  {
    "id": "acero-1UQ8Rnqf",
    "name": "M 425",
    "categorySlug": "acero",
    "categoryName": "Línea Acero",
    "priceUsd": 57,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1ZetLDQNgJ3V9xoeBNwAcXcbNoXf4uMl8",
      "1Abwazsl9fg20djNK6TuM3ofBCjxH8fxN",
      "1Akh0njcxrNmI4iqO5fdTpLLLTJMDdYsM"
    ],
    "featured": false
  },
  {
    "id": "acero-1lgwF7hy",
    "name": "M 426",
    "categorySlug": "acero",
    "categoryName": "Línea Acero",
    "priceUsd": 49,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "14xNejmDNbE_aTMkbwb1bXsSW1yDD-ScB",
      "1xSWkxOdm8iXGeF-XBfozP9KCYzSckfUd",
      "1aTCTg3sNcc1AqyNZ9QG1sbrgqjfAFqpU"
    ],
    "featured": false
  },
  {
    "id": "acero-1ETzA_CF",
    "name": "M 427",
    "categorySlug": "acero",
    "categoryName": "Línea Acero",
    "priceUsd": 51,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1kYXEuu2QwlJ-idqW3Sb-w6uKVOZyT_4K",
      "1CAsMD6KTfFJrO37wee9bO3oU0uNMytAt",
      "1hex8uI5hM8o3JqGl2FEXbDgPuSZmM8OW"
    ],
    "featured": false
  },
  {
    "id": "acero-1reDG2WL",
    "name": "M 428",
    "categorySlug": "acero",
    "categoryName": "Línea Acero",
    "priceUsd": 53,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1ED5GNCV4yG4HrwiNM8qEgVa8fZSyCA0L",
      "1Zvhk9XNKwFD6LQW2XyR_3H6lmroAQc1Q",
      "1DwNHNa-AFFtVv3YNxU9NDguZknE9_QbV"
    ],
    "featured": false
  },
  {
    "id": "acero-1zzjRGJL",
    "name": "T M 433",
    "categorySlug": "acero",
    "categoryName": "Línea Acero",
    "priceUsd": 55,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "13JRMbw0oIbA2tbs1mDF3LlkCe_QGwCKH",
      "1fUKRyeRybt7ttmIsn4dt_1yXkFPSq2bm",
      "17QIrlG8Y-auFgJDURLW74Gvnn8ytblcm",
      "111jM4vB1hIzbG03QGzGUsiuAiB-r318n",
      "1qZqWxW4Mwoqq0jRs35BYmF3C7qF564Hy"
    ],
    "featured": false
  },
  {
    "id": "audemars-piguet-1_ehw9A3",
    "name": "AUDEMARISV P AZ",
    "categorySlug": "audemars-piguet",
    "categoryName": "Audemars Piguet",
    "priceUsd": 155,
    "movement": "Cuarzo de Precisión",
    "strap": "Aleación metálica",
    "waterResistance": "5 ATM / Uso diario",
    "images": [
      "15MgGECX4aY-j2k5_SCf4eGcO1RaQGPbR",
      "1bxfYtJbDp-Df55GXFIclYM7gKpAPc8fx",
      "1jmi90_MyohdK9SlP2OgLBiDymq3kG5uq",
      "11VkDzZ8eVnqVwnf3ELiH87ayMIgkCN0-",
      "1dEbHnRrjICUP0h4HQcR5zvAlz3bcZYqn"
    ],
    "featured": false
  },
  {
    "id": "audemars-piguet-1tHwkqRW",
    "name": "AUDEMARISV P BL",
    "categorySlug": "audemars-piguet",
    "categoryName": "Audemars Piguet",
    "priceUsd": 157,
    "movement": "Cuarzo de Precisión",
    "strap": "Aleación metálica",
    "waterResistance": "5 ATM / Uso diario",
    "images": [
      "1DZ9_v_YYdVGLNEokVrNlq2KvxO6-4B4O",
      "13jdCCPgvmEwDT2-hKAohMmNZG3tjv3Og",
      "1zyN0yZrwb2DhB7qV1xNZMEA4V5HyjUHV",
      "1goriQ40yyICCQAp8BHtdDzbEy9r9DJ46",
      "1x7RyFkrUJOiHg8BDyO9tII4mG3xBaK6G"
    ],
    "featured": false
  },
  {
    "id": "audemars-piguet-1GRYLDTM",
    "name": "AUDEMARISV P GR",
    "categorySlug": "audemars-piguet",
    "categoryName": "Audemars Piguet",
    "priceUsd": 159,
    "movement": "Cuarzo de Precisión",
    "strap": "Aleación metálica",
    "waterResistance": "5 ATM / Uso diario",
    "images": [
      "1qNBJu0AjZwgfpCVUtjLT7i1IQ5KkT4tn",
      "1CHzh4uxNHGBUzmXgBu8W4FuPVOq2xRRF",
      "1f5qsektCSfoYNNYbSvU0VuphmhNyrUvK",
      "1voIqzVsxwlfBV8kup1NNHRYobmABWkNA",
      "1bzY05KrQTsIONOXUAezfHsNs_i34Vr0G"
    ],
    "featured": false
  },
  {
    "id": "audemars-piguet-1oRDzzzg",
    "name": "AUDEMARISV P NE",
    "categorySlug": "audemars-piguet",
    "categoryName": "Audemars Piguet",
    "priceUsd": 161,
    "movement": "Cuarzo de Precisión",
    "strap": "Aleación metálica",
    "waterResistance": "5 ATM / Uso diario",
    "images": [
      "1XwE7eicjZbRGtMLwK5jqRBfp2IFXx50g",
      "1KShXT7jlE2NJz3Ur_sdwkzMah0-BCJTD",
      "1dG0rz-suvpSSOHaixcCKHOFF7NCsU5vS",
      "1dwb0ydxd96JeIFN-g4GFIIAgykRqQwSm",
      "1jlK6zsZ7aOEY8KTeEhiMsJjiVmyFeeGb"
    ],
    "featured": false
  },
  {
    "id": "audemars-piguet-16FP0mpX",
    "name": "AUDEMARS P AUTOMATIC CE",
    "categorySlug": "audemars-piguet",
    "categoryName": "Audemars Piguet",
    "priceUsd": 175,
    "movement": "Automático",
    "strap": "Acero inoxidable",
    "waterResistance": "5 ATM / Uso diario",
    "images": [
      "1_4eii4wqwqZgn-AF4crBIGbxZ2b5ybfU",
      "13VbtjiPAUiTHNvUxruhnD4BWZEgQ3O1M",
      "1T6ZScStk85NY0ZTFZozn7YsSrER7axPq",
      "1tIBECSt_OL3Gv6cqpEN2rj0YKnvRu2NI",
      "1z4cH7R4IJDHf3bEh2aTBs1NxpbjlekMl",
      "1QpOnSvXvEhMbhutQkPaBAJ9hn0sttvnj",
      "1EzIfF_KTpmOIhwVlDOA9WfkSoP9SvdRb"
    ],
    "featured": false
  },
  {
    "id": "audemars-piguet-1Zv9wJnF",
    "name": "AUDEMARS RP",
    "categorySlug": "audemars-piguet",
    "categoryName": "Audemars Piguet",
    "priceUsd": 155,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "5 ATM / Uso diario",
    "images": [
      "1HLDyuSIq4_iz9XzxVtrLhFkDR260sQOp",
      "1natFp3oJ4nugLfX2JqGyNXDztiq4h-qQ",
      "1sii5XplNWAwJeUOAoelHZobtFRuIYlwJ",
      "13FxvCOUnFkI6YksL4FjRB6_THxJBgbqb"
    ],
    "featured": false
  },
  {
    "id": "audemars-piguet-1P4FB6_j",
    "name": "AUDEMARS RP C",
    "categorySlug": "audemars-piguet",
    "categoryName": "Audemars Piguet",
    "priceUsd": 157,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "5 ATM / Uso diario",
    "images": [
      "1nLTEEWf5AL7me3EUzy2HGgh9p7UALEYd",
      "1UsZlSHAgWGOqBIraK-rm_HnEVyUvQ5Wo",
      "1WKXIv0tIYb6zYgzoFVHvfnF2rbT_PcY-",
      "1dIVATNWGJ9ETmiyRakH_OGcj9wOYOagI",
      "1A7tTue3u0yE1U6SM9NdXL8TdPfvjDmxP",
      "1j_ORrjzIl0pDddtJ0SDTxwMSa4KUFtC-"
    ],
    "featured": false
  },
  {
    "id": "casio-1ZGFmtJZ",
    "name": "C1",
    "categorySlug": "casio",
    "categoryName": "Casio",
    "priceUsd": 55,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "13ke0vQvly_vdoshJ9ZxkkUT0wuBao-25",
      "1Xwgq6T-AC-Mp0PLp62EPypmSt_xDJ_Vx",
      "1RjjwlCW3tqovVs7CuYJlaUEhYGRTk7x6",
      "1A9smEoR6ZNV5-Qq7gbBaNYzQpL2Y-CTf",
      "16ttz9UaHgjuVM47SoRnt4hc6pofHK1wC",
      "1W2FDEtothHyTlHazh-UWI-qXw6LhhG_R",
      "1DG6Fna-dHw1e6WyuI3PVGao_65GvNMnK",
      "10zC1OXz0nXzn-oC13hKy2KQekYCRHExx",
      "1bk4ab6XO7wPHxDkLX9eRteGpYAfqOYDg"
    ],
    "featured": true
  },
  {
    "id": "casio-1gXeu5gr",
    "name": "C2",
    "categorySlug": "casio",
    "categoryName": "Casio",
    "priceUsd": 57,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "13KVo9maJs-UwRBcdEsSLphMxRHW35nIi",
      "10qJR9fvXMLquWWyzitF4J8z0tfTSq9gN",
      "13cx46pV8DcabG3qrO4d5LwW7-rs-ApQd",
      "16TbhRIUSzCispwO_ZYAEVXE6yWgZusL7",
      "1Bxu-FWBBQLAz5IG9IthzmtkZEtCs_u3Z"
    ],
    "featured": true
  },
  {
    "id": "casio-1yWv0yvN",
    "name": "C21",
    "categorySlug": "casio",
    "categoryName": "Casio",
    "priceUsd": 59,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "18QjvxvZXiAmRG3kZjH5DDQmTS6-GZGw6",
      "1IqZzDOY1W35JYCPs5dqa9Zupf4c4mvaZ",
      "1pXtlInaJsaAsplFIFm7I_kMiSpUWvDSd",
      "1s7Gd8edzNzzmZ685bnkSc34v3opA3tnz",
      "1josNAextx_3mnWaMFmlED0yJq3MIwhgN"
    ],
    "featured": true
  },
  {
    "id": "casio-1KAt2L6G",
    "name": "C22",
    "categorySlug": "casio",
    "categoryName": "Casio",
    "priceUsd": 61,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1Zyzk0r1-7ZOI8y2s95aIofVOJJUJeAB9",
      "1jX5PXET2pGV8By2AjqkaLYLhlV2f9cRa",
      "1Hnh2wawksOe6zFa8GQTUGGIwValytMMv",
      "1Mxz6cTjd5S8_39DWIv0_HV0NJfFK_5Ya",
      "1LFVvXqNXA6yhEXSoYZ5oI-XhX8qVQBPi",
      "1rtyh3wjHIycuw68StjFcR3YS3IVmmMin"
    ],
    "featured": true
  },
  {
    "id": "casio-1drmpl-Q",
    "name": "C24",
    "categorySlug": "casio",
    "categoryName": "Casio",
    "priceUsd": 63,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1GQEneJIcS8AwWBBkSW7xdicvVbG14Swj",
      "1lTJJUoSkCVaLyIMB9YxUp0b3CwXz8mJi",
      "1DZAo0FSCmXiP_FdprcCJKudR4DS37ndt",
      "1uHQmoIGoTmoOEFjoB7iB7OeyGlPCf1V5",
      "1Wm7P5YGSgS8qh-hZ8iLhYfN9XhMTBNfl",
      "14I0sXSYdyI0ysiieIbxfzSeJ1zkk_Rmr"
    ],
    "featured": true
  },
  {
    "id": "casio-1tlBAHhL",
    "name": "C25",
    "categorySlug": "casio",
    "categoryName": "Casio",
    "priceUsd": 55,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1XeZmgtea0W20kU5X8DUZ5MIYNFRhrKy8",
      "1tR-gLUPLAPzNWREYrOxvRcpel-daHqHc",
      "1JVXfatvqL8NFeh0dRSnVeFj12YQOd43H",
      "1fqEyyc2-6qyA6gSDOJafsyqwNJVtE0if",
      "1KU2ap7hZBqlaxXPMPS7C8atuBo0KXRBq"
    ],
    "featured": true
  },
  {
    "id": "casio-1i6k85bt",
    "name": "C26",
    "categorySlug": "casio",
    "categoryName": "Casio",
    "priceUsd": 57,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "10nrTiUQkPXZ-gjbP6y56mMeB2YS7K6_-",
      "1oVYTnUh4dqI_EUjSZjhtWab0I-u8Dkhw",
      "1IKBLXG7tl3nuQ9g5QWlrgDSdPRx3qTxA",
      "1p9FOU8_GWEtNXVTzCNm09V2QlNHgliaU"
    ],
    "featured": true
  },
  {
    "id": "casio-17cYE3t7",
    "name": "C27",
    "categorySlug": "casio",
    "categoryName": "Casio",
    "priceUsd": 59,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1cAWtNiK2uzY1zKExMJID4xAAB76jvz32",
      "1YpuHhC4WHVg37GljRy11q69irhTgLR_x",
      "1E2X1XDsfCuLFhC85hJSRJRwsroEj5wbH",
      "1l0IjywMO5mAu7Z7z2SLk7aBUcafDmKbN",
      "1UErW-9d_o2OYg10sjaNJ26iReGbWhiSK",
      "1hy8ioEc5paC7GqJogTEQ9hx7zWdeFL5d"
    ],
    "featured": true
  },
  {
    "id": "casio-1Yswmh8U",
    "name": "C28",
    "categorySlug": "casio",
    "categoryName": "Casio",
    "priceUsd": 61,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "16wLFg7NZWbJd1I7RrRpfIMC3HTS3HhSA",
      "1JL3pd8QANtjxVHvpKL-cmTn9Of3g5r9M",
      "1BD6PSn2ekt_6-MdPRILVlj1sHhHyY1Dv",
      "1UIaB0nXuqpA8egTt0VlVVA5iLe6QhjVd",
      "1bFzSctHeObQ2yZKOPa9i7ZU4pBe-7SwQ",
      "1SlBCmRUn20SB1cxwyIcqoIohGNG3GQ7v"
    ],
    "featured": true
  },
  {
    "id": "casio-1v3Mt9Yz",
    "name": "C29",
    "categorySlug": "casio",
    "categoryName": "Casio",
    "priceUsd": 63,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1wyKN3do6mJ9Y9MpEuH8gO4TZwmNiKVH-",
      "1wqtmVDXpDjYxCZ4P5FAKZQJ1EnLpekWu",
      "1_Ixt1EST2jipSGCwvCArmdYkzR1jPEGB",
      "1Te2yiwt8e6l816OEasp4jAajIKEqoh3Q"
    ],
    "featured": true
  },
  {
    "id": "casio-14wRnMPv",
    "name": "C30",
    "categorySlug": "casio",
    "categoryName": "Casio",
    "priceUsd": 55,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1C8YMO0GcpKQGPxVoGdwY7WXbF2hPFfue",
      "1X7-zgXYPG7PLQVTqLHf38NM8PujQME07",
      "1MAcXKZXnFOtgsWkQrslVtwgNgPZmkM-L",
      "1W6WkY8ZvArxFy82YtGRNzDww1kryoOzc"
    ],
    "featured": true
  },
  {
    "id": "casio-1KuznDOO",
    "name": "C31",
    "categorySlug": "casio",
    "categoryName": "Casio",
    "priceUsd": 57,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "164bfWp31bDY6yPud0VLFnmBFbLBdWY66",
      "1b9FKciERncdXY31qGhDT73fJP54AUkyh",
      "13SJQPmHcFlXFH4D4w7yEBlbB1RYqpyzH",
      "1nGO3Y8wxjdaKl8phNam8gOasZ3-NEOrr",
      "1l-5S00OZFKDtvnAKzX-tVmd8UOeq4152",
      "11W09nSIDKf_BpjqVrGJb0QGZZPFec_j5",
      "1J1o-Py0PVIfClXAg0hQwfUy_yaxWNkf_",
      "1OBVYk6pBdBNQ-ZrZkqwb9rmMsq1QfQ0f",
      "1lM21GhBlf0MxR2Nx8YslWGMqkyHShUd_",
      "1Ea2RB6a_IuYK2QMVsxsd5v0g96_H00Ut"
    ],
    "featured": true
  },
  {
    "id": "casio-1Lpj_mRF",
    "name": "C32",
    "categorySlug": "casio",
    "categoryName": "Casio",
    "priceUsd": 59,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "12febcRVRqQ4-_tPb9UfXaa2JQYRC6ikD",
      "1ieL3hXvxHc_ejLM5q3QL2M0NCi5P8n04",
      "1ddkHlnzoRpfKBsLB3uckSMe0OiP8J7Il",
      "19PRjhSVoTtilXYQZjebGaTnYa99h2rlj",
      "1N_8w9nxQqyNZt4GMiqkrMBwv7J5vfCNH",
      "1UaYft8nqCvP1Vv4YpbMNyK0k0Y0rsGDq"
    ],
    "featured": true
  },
  {
    "id": "casio-14ywgTmH",
    "name": "C34",
    "categorySlug": "casio",
    "categoryName": "Casio",
    "priceUsd": 61,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "116LB9JUWZCPbDxnMyMmtJ8BuxQUbCbOi",
      "13GNsqeIEM683SMOanOgpV0Inb0cf4bFe",
      "1nYAsy7S07e3AagCC9-WttC_8Mcni-UAr",
      "12uFQ1S7CleRVQ3lrNrMX-847aa5KI9FQ",
      "1HS7UFP0BeFbjzoVsW574hK_BnkRyPYWT",
      "1-Fo0XpR_0qcw2iCXGWSSABAAZof5azoX",
      "1y7G7ioNt1peeqDWy41vqCHU75ZJaHrp0",
      "1aUJ7jYuWbeo4kETQcoeDDzhli2UvNX5m"
    ],
    "featured": true
  },
  {
    "id": "casio-1QZ1B3SV",
    "name": "C35",
    "categorySlug": "casio",
    "categoryName": "Casio",
    "priceUsd": 63,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1qOo9eC9AzqhA8PSj_logKvseO9dZZq9P",
      "1J5qeli-3PdyqxyuGcy-9GIwS6qsWEJHu",
      "1cEbmthyfr_gMGGB5wNaW6XHDGF-YMSGu",
      "1uIsbBSM6RFbiaJzr8LbJku4J-3-VpKx6",
      "1bgUrcSCmlN_Yg1zaZO8nWsi3wl8K8jcH",
      "1Q6NcZM41F7zoyS7POGDtJyqBDamA6PGY"
    ],
    "featured": true
  },
  {
    "id": "casio-1EEQ81j1",
    "name": "C36",
    "categorySlug": "casio",
    "categoryName": "Casio",
    "priceUsd": 55,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1xVCgc2991vBzB54s9NILVX2AzIJcxM9O",
      "1qIKIZ6SMOvXUJGzW_JacM2JpBjZtg839",
      "1kF5LYmb1Xrs3uONv9ufSl6QoMyL7SFXl",
      "1azWT8fF3e8Y7Vtgj03zMUqr02d6eqwNB",
      "1sch90CFY76lqMtTxGr-iKjvaZ_f0kuLE",
      "15AsMAce1yVB9JHxtpq6G8Lxtu6NkVbsG",
      "1Kxp3M6eE4Y8HoGmjaer4p72GTdvMfiIo",
      "1DSEsmPCpgIvfJRNHAQFnlfQ65-013AHM",
      "1d0J8IyJfB8AEgNOzBJZpyclpkJSS1vF5"
    ],
    "featured": true
  },
  {
    "id": "casio-1cy5THHT",
    "name": "C37",
    "categorySlug": "casio",
    "categoryName": "Casio",
    "priceUsd": 57,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1Ah5eXQS6mOz6nGo97Fsqdfk6A2oqtVwQ",
      "1OGGww5YPYnSeuE55qqAqexHQPrtHAJdz",
      "1SoU6SyLMKr33yiecSWigoNHnNjmP4IP_",
      "1srku7KHAb5OYHJmcZyEfi3r0mtZgFWK0",
      "14ntHrWkrtgO_buiIUz7-tPHndgFQvgIV",
      "17JQQyl4rDQVlTtohig5x1ItaYm9tawIc"
    ],
    "featured": true
  },
  {
    "id": "casio-1g2bGUtw",
    "name": "C38",
    "categorySlug": "casio",
    "categoryName": "Casio",
    "priceUsd": 59,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1zxjCFTbkPZFNBiaCQTKxcc2duQCAM7Kv",
      "152BbUexqnR1TE12AtkS1citk67d_auoM",
      "18uvWda7J5gBvpgw5iCbf1FfUrXI2ZVR1",
      "1sjeHW5Ig_WWedPx3U1rzsWkRS1E1Z2SJ",
      "1VgSwEP72MIAVFleyrtaNZoA40Vhuy_Xl"
    ],
    "featured": true
  },
  {
    "id": "casio-15wfE1Qz",
    "name": "C39",
    "categorySlug": "casio",
    "categoryName": "Casio",
    "priceUsd": 61,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1f21We279eo4B2ruH0foxAhbqAu4f2yB2",
      "1-P_Lbh3zwAQe7emM1N2DSE5nE9sxuRsQ",
      "1lS7UGhncoAIahT934h_VWCe047GHKhkr",
      "1qLhweM5DSImSyhR85ZSc2VnnKIpgGNF5",
      "16ZVTrj3bjnQvJdzuiXAdMZWCJMl9h_oO"
    ],
    "featured": true
  },
  {
    "id": "casio-13_yo7JQ",
    "name": "C40",
    "categorySlug": "casio",
    "categoryName": "Casio",
    "priceUsd": 63,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1s-qzhDxMiKnPG85VH45Ec7d-dex-mWVX",
      "1kMEPav36s3Tx-2DW2WkfzbOeom7Z_8oK",
      "1y48-qsbEHYcFF9Z7XRJuYHYcj_UlSyNn",
      "1rVjxu1tRoAw2XFclEcOoMdCOr14KojXd",
      "1UdNiF5dU-FhO289GqGupcjUUCV_lVl85",
      "1Nmgqnlfm3tZYsbwZnNk1wdypeLgqZssO",
      "1DdPSLL0SNQ1Ri1bLs2SvUyKw1xgFtrD5",
      "1fZSIFRBfnfAbPVHY_U7akAI568o5mG8L"
    ],
    "featured": true
  },
  {
    "id": "casio-1YOphf88",
    "name": "C42",
    "categorySlug": "casio",
    "categoryName": "Casio",
    "priceUsd": 55,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "19Q0PSwQeCSYY_iK6S5G_xuLgNTKwgZSI",
      "1Wil2nB8a4qqid01HkGPvj4vdzT1sRmuf",
      "1XCpJe90-C17SLFiklFWMo7RbPXqh4Flk",
      "1QCaxP8YS9KWq_fYMgpsTCxisAsPDuW6f",
      "1bpbMYYpiIurOxHBEFyer4HhkdXGlWFJi",
      "1OsQZUoKNNlGyxtRRqyM_d4-oF0SVN8ta",
      "1oNtdGw_bmxdwgMP37y7T7peDraZ_H6BN",
      "1MJqen89l4SUOVPbVRztzrZgxwifq61Kq"
    ],
    "featured": true
  },
  {
    "id": "casio-1y438YtJ",
    "name": "C43",
    "categorySlug": "casio",
    "categoryName": "Casio",
    "priceUsd": 57,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1t51krWm5XlXC8jccNzh_8rZLkqOaUE-v",
      "1MbtFyQ6RYynB5srhyx6yv7UBAvDblWaV",
      "1z11DzuCX1L2stb00G7F8XaBHynbHLQiV",
      "1evjGzoymu7ITZ7DUYvQybjE2nn0EF7nC",
      "1aGguc_niAe5dKJMOwdTxnTliLDznR6uV",
      "17f22oaw2rTENB3oLOS7oNG0Y-y5FuTRl"
    ],
    "featured": true
  },
  {
    "id": "chenxi-1T-MF99I",
    "name": "CHENXI 745 A",
    "categorySlug": "chenxi",
    "categoryName": "Chenxi",
    "priceUsd": 52,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "10hlJxTPudOvnW_STK00P4gqiFrCLE_OE",
      "1X7UpnpEyz5jA7ZKaFo_Ky-fcKWXljuMw",
      "1KUTWpmvooYgyT2iRYKZDL6QcWYtIEHq-",
      "1EA8g-6frkvxibI96ol6T4-0jc7SckDEg"
    ],
    "featured": false
  },
  {
    "id": "chenxi-1BmJGvs2",
    "name": "CHENXI 745 B",
    "categorySlug": "chenxi",
    "categoryName": "Chenxi",
    "priceUsd": 54,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "13d3Z7uCiKWV9_A2xK9tHJbChXME0Y1Pl",
      "1FueC7x9G_zK0FVjH3ARI6LNSQlfn4Uun",
      "1PEpOvNl9GmdUnS9AdV31K_h7mLt4iK4d",
      "11SYNAVwJFd-z-GJkEn-dkRrJ2lOREl2B"
    ],
    "featured": false
  },
  {
    "id": "chenxi-1wfysnAQ",
    "name": "CHENXI 745 N",
    "categorySlug": "chenxi",
    "categoryName": "Chenxi",
    "priceUsd": 56,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "14IgkVjY8k4HEcv3C6VJ_hA-cYW_A9FO1",
      "15NX9ne6mCMlhokDwRKa_06O7-Bu9OO89",
      "1M2tSEk1Lo_Agmn7RiFdda9sgopfLo1F_",
      "13RFf7i6iit3qla5PKzJJfTniFzT2pohq"
    ],
    "featured": false
  },
  {
    "id": "chenxi-1s4DVuEn",
    "name": "CHENXI 745 V",
    "categorySlug": "chenxi",
    "categoryName": "Chenxi",
    "priceUsd": 58,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1SjbE3LET6ndwV56HFMOPbofEtqIexcgm",
      "1cJjPGqD9A1A1j2k-KoQL83CiVTrnNyra",
      "1ewgEmWpZ3sWtWscmU9dh4hfHIkgKdxCi",
      "1wZ0o9xmsF39kjn3krpZXx9fQ78iWYZdM"
    ],
    "featured": false
  },
  {
    "id": "chenxi-1IasMPqK",
    "name": "CHENXI 777 A",
    "categorySlug": "chenxi",
    "categoryName": "Chenxi",
    "priceUsd": 60,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1gP9jKHsYsSqFvRUYjG-RdNVp4p3DbQSk",
      "1VUCWx0p59kZFF8pCgqr8KygKD-pYjBs4",
      "1W3hxLRmSPKaaciFXdoE3hGWj1DsRXSvY",
      "14-2i95RA4sjmC5Bo3PO0azIvrBSP06ku"
    ],
    "featured": false
  },
  {
    "id": "chenxi-11lrWzbS",
    "name": "CHENXI 777 B",
    "categorySlug": "chenxi",
    "categoryName": "Chenxi",
    "priceUsd": 52,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1hUgil2Jds58NH8aZenq9F8DYP2RHMOlz",
      "1rfiGXu6raED6q91K8zcEhaY5K63ohWsw",
      "1WzsmToGQ4f_mlhFYhSJdzTnOMPDm6ZU8",
      "1u0hRd2A-Tn8gRYpEUy7EXB1QybBOVcNc"
    ],
    "featured": false
  },
  {
    "id": "chenxi-1xuLWXyg",
    "name": "CHENXI 777 N",
    "categorySlug": "chenxi",
    "categoryName": "Chenxi",
    "priceUsd": 54,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1qDxMqvG7RElDXJ2qScWxxYY7lGcHzeBj",
      "122gfiJWeeMr0351JYSWkBKcwIQqCOu33",
      "1CrcWtZgFR2Iisy8sZW3oagBfb9cXGNiq",
      "180GGW8j8sUtqU7mA6Rp3kBYRxCzQh8SY"
    ],
    "featured": false
  },
  {
    "id": "chenxi-1stk9C2d",
    "name": "CHENXI 883 D",
    "categorySlug": "chenxi",
    "categoryName": "Chenxi",
    "priceUsd": 56,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1xGhdJ2OId7Pd0Lzl-R9qOmQjzwr1hsPP",
      "18xXL7XelrCdMda43StAtn-mUtEEEqMH-",
      "1jHg7mc1bDO4EvT-YhREIldj4dOeN_R1D",
      "1fW34byr7_DNdD-mEqR4NPvmmIbcdvOtb"
    ],
    "featured": false
  },
  {
    "id": "chenxi-1W6EO5hm",
    "name": "CHENXI 883 D AZUL",
    "categorySlug": "chenxi",
    "categoryName": "Chenxi",
    "priceUsd": 58,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1RvRIbDNhChzLycvZgM9WS5vHhU_xfgJ7",
      "1kS5mkjCbhBRIsE8oI1bhKmy1d6BdSX-0",
      "1DyOYq9JUlzxPkYvFfJ63Y38AKaEGhWc4"
    ],
    "featured": false
  },
  {
    "id": "chenxi-1R0QA8G-",
    "name": "CHENXI 883 DB",
    "categorySlug": "chenxi",
    "categoryName": "Chenxi",
    "priceUsd": 60,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1-re8P8zpQjKNx7wVfjX_lH6eLK4DxEL3",
      "1vWydF8ie0n8UzrpyknsKcghq4Z7X0Prz",
      "1K1EUVR9MqJ-IrO5A7LxltYWr7ZJtnazT",
      "1WO6v66H4gT7W_b4__P3awC9Vky4Yw38M"
    ],
    "featured": false
  },
  {
    "id": "chenxi-1AvevB8z",
    "name": "CHENXI 883 DN",
    "categorySlug": "chenxi",
    "categoryName": "Chenxi",
    "priceUsd": 52,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "17JVofvnqmJ5F11Si9bOeIBhwNy4ES42Q",
      "1CfEbbMT7Dqgjt6uFB87QmJGtOZJlMtJu",
      "1jgr3dmaCqWgWx0iacxWctXXbtQgGnaVf",
      "1Ly1OjBxVFYltwxEXIfhF5SlvCAKOt02a"
    ],
    "featured": false
  },
  {
    "id": "chenxi-16KFv0Pk",
    "name": "CHENXI 883 NEGRO",
    "categorySlug": "chenxi",
    "categoryName": "Chenxi",
    "priceUsd": 54,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1d6BuRWFepfy9tG5YZvVaVkc9HK_3ge_J",
      "1atsFXZA8AqruEIM5eB_DLtn9fPNnr1bd",
      "1jUDrUv-NgMUJuYKb-CY36j1Sh9FpJq0T",
      "1aWFcC-Tcx5BBQsAmPPb1GpzzxWhZLgRb",
      "1nP98EZi-e9I1EwA83T-xdIQgetu2NYqQ"
    ],
    "featured": false
  },
  {
    "id": "chenxi-1Niy1pX-",
    "name": "CHENXI 898 A",
    "categorySlug": "chenxi",
    "categoryName": "Chenxi",
    "priceUsd": 56,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1jicrVogSWyfHl0Nnf15Ks-h2h1pQgzA-",
      "1kG30QgOUS8iL0d4DadZh92YI_q7ptgqY",
      "1DKjZZfvqVDIG_rsVQ4aZffKYoso74GY7",
      "1hGmV9P2PJHcNQxksUixy8akc1ZsJCjoC"
    ],
    "featured": false
  },
  {
    "id": "chenxi-1o1HnhRR",
    "name": "CHENXI 898 B",
    "categorySlug": "chenxi",
    "categoryName": "Chenxi",
    "priceUsd": 58,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1juHJyGqKR2LVDuCfL8SVHh3JQtBdW2ln",
      "1gW3vUtrZ366_eg6JSQaX6NZgbc2WACu_",
      "1U9OUQRXM7uMvMaEANc7QUqWyVpl9JyxG",
      "1VD7J6pscyIy-mWKK5gVD9YFbDKiuTBw0"
    ],
    "featured": false
  },
  {
    "id": "chenxi-1D-zP7g4",
    "name": "CHENXI 898 N",
    "categorySlug": "chenxi",
    "categoryName": "Chenxi",
    "priceUsd": 60,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "13ZVW6VQ6FNK65I1agAn1HVdeAcdTAAd8",
      "1VQUjNLP8guM4YMs2QyKy8UbyGx4Dl7jV",
      "1cDFSv7hkr2CJf5dVqwOgLMxZnxAHwbQK",
      "1Lv8LWvFxQqXJWcM4Y0XO5tMuDUUIp4wU"
    ],
    "featured": false
  },
  {
    "id": "chenxi-1zDZDF1d",
    "name": "CHENXI 983 TOTAL BLACK",
    "categorySlug": "chenxi",
    "categoryName": "Chenxi",
    "priceUsd": 52,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1iolRXgW6vV0EEqGdSZt52Ny6YeIY3Elg",
      "1uBkA-WbYNkaE-c-c59tkLaQ1B51ZBkCo",
      "1sr5zK9G3wH7AWnouCttfGDeCQifiJDtv",
      "1W34XvzNXvd3WEHE1vCsAU12AyTrHshjX",
      "14_zn3BKB37hx_xNN8LBUIBFW1a435rwD"
    ],
    "featured": false
  },
  {
    "id": "chenxi-1xXhx4Yn",
    "name": "CHENXI CARTR B",
    "categorySlug": "chenxi",
    "categoryName": "Chenxi",
    "priceUsd": 54,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1z1uI7MWnyXTpBCqlDPhMP0GMDo_tMyOK",
      "1IBGb5LD1xwR3EOlYlaf4eWLNm3TXy_UI",
      "1GTOmcFiYcyUJTZHrY2QZetAxHasvirQt",
      "1uh3W9ghyJbEjNGCAPvNVyWkP6wdv6QdP"
    ],
    "featured": false
  },
  {
    "id": "chenxi-1uzvcMDO",
    "name": "CHENXI CARTR N",
    "categorySlug": "chenxi",
    "categoryName": "Chenxi",
    "priceUsd": 56,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1PlS8iWni4c_psL1wcsFrkySYZdxahdJZ",
      "1Ouflay3rZJs8JmPJ-bGJBW5Z6iQE1hu8",
      "1Z2aN6wXTZ1xcHhp5sSE9gJ8F_mWjr9EW",
      "1pmz5j20lbhbopQ0MetxX0RB6XDnvW843"
    ],
    "featured": false
  },
  {
    "id": "chenxi-1TdZA6_1",
    "name": "CHENXI DWELLER A",
    "categorySlug": "chenxi",
    "categoryName": "Chenxi",
    "priceUsd": 58,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1lrX8cQYeFZ4GzwZPXG__1CHDLiRT7WT1",
      "1aoktPvjLOyVF1AHRWrolN3HgYlz74TWJ",
      "1uzwLZwESpUS9f34YfuAF5Ny8jXb1QhWb",
      "1alEnY6O1UV77JzSufiIYq1d4eROBc41m"
    ],
    "featured": false
  },
  {
    "id": "chenxi-1ayTf3KX",
    "name": "CHENXI DWELLER B",
    "categorySlug": "chenxi",
    "categoryName": "Chenxi",
    "priceUsd": 60,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "130QcLSoyyzl2JmAQVi4y5MxE68t_WV_W",
      "1kMAf7UjRn6IS36GFQcXV3eNP8h-McIUg",
      "1DHAgkfG35meq1unrrC-PsbQY9_VQAkQY",
      "1HgfsCRRNBHplhI1UaihtLYsrlvXCL7Y-"
    ],
    "featured": false
  },
  {
    "id": "chenxi-1pJ8PO9i",
    "name": "CHENXI DWELLER C",
    "categorySlug": "chenxi",
    "categoryName": "Chenxi",
    "priceUsd": 52,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1RuZ8DHL71FgTQ7PfhaLd3v2jeo4IiteP",
      "1zJWNryHdbRNgEGil-ve2GuMMmTTad7am",
      "1qckweZdxfmXVEgXYoKUfvSkPPixeEssH",
      "1zQff3axcy1iNZt2xGdezD_Efsmvjh-53"
    ],
    "featured": false
  },
  {
    "id": "chenxi-1FHdQu3v",
    "name": "CHENXI DWELLER N",
    "categorySlug": "chenxi",
    "categoryName": "Chenxi",
    "priceUsd": 54,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1DtXTI-HtpsTRkIYmnyNYr-sasVjSfeDv",
      "1iJL7Lw20Z3BEd9UuwflOzFShAY-C8LNg",
      "1ogphjIvJaFutLC7EMDh6vk0QxF9V2FJk",
      "1TskwzT8Z-l-txFgMzFsA6bpNKuCNuwWQ"
    ],
    "featured": false
  },
  {
    "id": "chenxi-1VyFsGvC",
    "name": "CHENXI DWELLER V",
    "categorySlug": "chenxi",
    "categoryName": "Chenxi",
    "priceUsd": 56,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1Il9K72xx_PO0X93SCkwUSZ8QTcPOhNLg",
      "1oyMdPHwI25vLtpv6hLtLIwS0OytDTQWM",
      "1QSfucyhJnxAH8g0xZydFFB4znmTWJprA",
      "15DkpHWdr822NxCZ7kpFh9UPwHggSqGep"
    ],
    "featured": false
  },
  {
    "id": "chenxi-1j132EKk",
    "name": "CHENXI ESFERA A",
    "categorySlug": "chenxi",
    "categoryName": "Chenxi",
    "priceUsd": 58,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1Hwj1re6AR9q1l1mFjie53v2BustVvekf",
      "1cNUCJKGdY3OO_EdUfqPsZbPcgNfg_UqA",
      "14ZyLoj17liTC-so-wvOZL2FEo-sQRreJ",
      "1bM001e4vXSHK0VROrpCMPOMpUzLNW9tC"
    ],
    "featured": false
  },
  {
    "id": "chenxi-1efv-Sqo",
    "name": "CHENXI ESFERA B",
    "categorySlug": "chenxi",
    "categoryName": "Chenxi",
    "priceUsd": 60,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1df3GU_q3Bz9p1RfAM9sQTMFhIZ2Q1MSG",
      "11oR0OYMDID3l_yHBUM2Imv6LPrf2A_9q",
      "1O6kS_fFSEWrHh5im5MaYDx_pBB1mWr8f",
      "1ykMkVxTdTAhA9WK-6d5sjhTDCmiKl1Cv"
    ],
    "featured": false
  },
  {
    "id": "chenxi-1GErS4qS",
    "name": "CHENXI ESFERA N",
    "categorySlug": "chenxi",
    "categoryName": "Chenxi",
    "priceUsd": 52,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "166DZwr2dPc9FH82PXhx6t0WipL_xA7Bt",
      "1RMTFu5Sr1S5TdX8YvY6le587FuieEZo3",
      "1qjBcvCpgz3AjjOd_WSWTjk5dndjO4ygg",
      "1NYI2liE8DBWsV6PPZGKNS6NmV1kIiIGx"
    ],
    "featured": false
  },
  {
    "id": "chenxi-1UOwgJlv",
    "name": "CHENXI ESFERA V",
    "categorySlug": "chenxi",
    "categoryName": "Chenxi",
    "priceUsd": 54,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1wBEtsOEC-4eWRX-O4gj7PgZabXp-Iz50",
      "17NLQ0-woOptEMGX73KIbMCbbpMfaD25y",
      "167ttJHtdREV6JFfwdLMLviLc_Pjv7PCM",
      "1yLiLUq-w9bB5sQNYj1lK_DZONrYcASWL"
    ],
    "featured": false
  },
  {
    "id": "chenxi-1puvxWcZ",
    "name": "CHENXI PIEDRAS A",
    "categorySlug": "chenxi",
    "categoryName": "Chenxi",
    "priceUsd": 56,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1kTP9Do3GPasosdU3MHCYXLMkwIIy168s",
      "14FEc2be-nzuAGS7cLwoBdd_VGvyns1OO",
      "1I0fnRBb-yVlsgo9ElOoWaryZlugeqbye",
      "1yrZKo5l9bB_GXItGyIYp-H7NNUxj0tpt"
    ],
    "featured": false
  },
  {
    "id": "chenxi-1fdFuRE1",
    "name": "CHENXI PIEDRAS B",
    "categorySlug": "chenxi",
    "categoryName": "Chenxi",
    "priceUsd": 58,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1KBKEmFCk0xtyP8zQAd7Hq0ldBfk8SM7T",
      "1U1ZfxyXfQqwH9d3DBctg3CS8VPIShJkP",
      "1WQQXj-J6YLrKzOESnP69rpCDLDPa9MSH",
      "1ty5xuU_MDffzVadTEwpvsFt8HzW7kTID"
    ],
    "featured": false
  },
  {
    "id": "chenxi-1nDf-K4T",
    "name": "CHENXI PIEDRAS DB",
    "categorySlug": "chenxi",
    "categoryName": "Chenxi",
    "priceUsd": 60,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1vC68jk6oc-sOJi2SeWaTZPymj9vvpr4d",
      "1OkbNa9v4aB-I3NsbZuPmjsIDWnp8l0ji",
      "1ojnHCiSqXglh1cLkojmrdHMQksRgn8iY",
      "1DnmQyGl-GKFD-ueJ_9dBqg5yWmXaOcWg"
    ],
    "featured": false
  },
  {
    "id": "chenxi-1UbJPQg8",
    "name": "CHENXI PIEDRAS DN",
    "categorySlug": "chenxi",
    "categoryName": "Chenxi",
    "priceUsd": 52,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "193S9fCGPuiOM5yeKkPcoFRbfcu_kMLB7",
      "13E-zSKSY6RR-iJOK2LaBb1iqhdG2-9nx",
      "17rX8NKVPAM6PfCvt0u4xhp1jBCy5dA2X",
      "1YHldHc00qhAiVRMHIgfFJfvbLhKIGvBt"
    ],
    "featured": false
  },
  {
    "id": "deportivos-1kbYgcBg",
    "name": "M 121",
    "categorySlug": "deportivos",
    "categoryName": "Deportivos",
    "priceUsd": 42,
    "movement": "Digital / Ana-Digi",
    "strap": "Silicona / Resina",
    "waterResistance": "5 ATM / Uso diario",
    "images": [
      "1i1BssxOLuPdBZfTFTIuMyntfZPJpuX7E",
      "1ENtqbXco2a_LdgDGb62O4nAfwLGtQqbA",
      "1RtfQ4TGncIdAjzD3BQZ_08Y105bMzUXS"
    ],
    "featured": false
  },
  {
    "id": "deportivos-1D0WJNRB",
    "name": "M 125",
    "categorySlug": "deportivos",
    "categoryName": "Deportivos",
    "priceUsd": 44,
    "movement": "Digital / Ana-Digi",
    "strap": "Silicona / Resina",
    "waterResistance": "5 ATM / Uso diario",
    "images": [
      "1ensuLAZLeI8uFfpcSC3pxhQh740CKD8h",
      "1GNHIr1gO7IRR6PUbgjvCP0uadjigHsbd",
      "1h71I3AMYG2_IadbfqGgc-4jChWVWPB-m",
      "1No8Hp7GAgODjlB1kMvPheKobPwwBR4bF"
    ],
    "featured": false
  },
  {
    "id": "deportivos-10g69ApY",
    "name": "M 127",
    "categorySlug": "deportivos",
    "categoryName": "Deportivos",
    "priceUsd": 46,
    "movement": "Digital / Ana-Digi",
    "strap": "Silicona / Resina",
    "waterResistance": "5 ATM / Uso diario",
    "images": [
      "1eePHGfce-ZbuEcUHhKTxITi5ZQt_kGN9",
      "1H1DFSKkcLEswUqOOUcjwZxFhLhqh10u3",
      "1Ma9W8EL5D9t8gqGQjrny9CmVzlpg1oAc",
      "156_dOkctGSMVMrfEh4F6bxLZi6YW0rIY"
    ],
    "featured": false
  },
  {
    "id": "deportivos-17MzAo7d",
    "name": "M 131",
    "categorySlug": "deportivos",
    "categoryName": "Deportivos",
    "priceUsd": 48,
    "movement": "Digital / Ana-Digi",
    "strap": "Silicona / Resina",
    "waterResistance": "5 ATM / Uso diario",
    "images": [
      "1uUt-Q3gA7hckMRo53hbHgrICez8hfUtQ",
      "1EKa0_ilM9PctrIs-tI-c00px7JPksUBD",
      "1jNB0hnNSWzkSP9QPOljzbs3Uqjs2zFoO",
      "1ZRlMNUN51Va3-unEqaiREVIk4Ajl9ACA"
    ],
    "featured": false
  },
  {
    "id": "deportivos-1BSUYz-_",
    "name": "M 134",
    "categorySlug": "deportivos",
    "categoryName": "Deportivos",
    "priceUsd": 50,
    "movement": "Digital / Ana-Digi",
    "strap": "Silicona / Resina",
    "waterResistance": "5 ATM / Uso diario",
    "images": [
      "12CGBsMny_JLNUeBrEqOSTU7_T0-udlA_",
      "1LbIBO_bPAlJDjyD-A0e-Y_MIn7-4Tf-f",
      "1OocNhNU5nqahuIzus7zrLcmhN1FVZfXw",
      "1n1vShDJvBxt8_RJBaAAy7pCD1vv60wiC",
      "1voQT8mYk8yHI1EpTWZAiPzg0bdK0ubPM",
      "1C2UFD7JeRWYONyIiOE5mB9nfojVRqKaD"
    ],
    "featured": false
  },
  {
    "id": "deportivos-1emXuuP9",
    "name": "M 143",
    "categorySlug": "deportivos",
    "categoryName": "Deportivos",
    "priceUsd": 42,
    "movement": "Digital / Ana-Digi",
    "strap": "Silicona / Resina",
    "waterResistance": "5 ATM / Uso diario",
    "images": [
      "1dcfNu6WWjy8tpZ8bub-EEpzpX2raB5Po",
      "1oaPS0Q6EbBtdtB2k8hJNO8bwWxUbtcA7",
      "1Ra5cMIesAVYRnHqsNVuQSfgWrT_pblzl",
      "1Yri-YYJa3iXUWXAmIeR4LO89aa3LNVDR"
    ],
    "featured": false
  },
  {
    "id": "deportivos-1WjxI5Ia",
    "name": "M 149",
    "categorySlug": "deportivos",
    "categoryName": "Deportivos",
    "priceUsd": 44,
    "movement": "Digital / Ana-Digi",
    "strap": "Silicona / Resina",
    "waterResistance": "5 ATM / Uso diario",
    "images": [
      "1w4QAwvv4ViO9at7XeKrZaU4go99nzxp1",
      "1_oRM-ab8BktWUN2vrCp0hypC0eK9o1N1",
      "1JXz3-JD32e21bFNrSWzKOzgyzjgoF3Wk",
      "1sja6O87zom3LfIyt4FPHJ1H3AUn6C4Tu",
      "1ap4OOI6Ca3AsjuPTZaOOIwLcHIq_LIN9"
    ],
    "featured": false
  },
  {
    "id": "deportivos-1_rF2wHw",
    "name": "M 189",
    "categorySlug": "deportivos",
    "categoryName": "Deportivos",
    "priceUsd": 46,
    "movement": "Digital / Ana-Digi",
    "strap": "Silicona / Resina",
    "waterResistance": "5 ATM / Uso diario",
    "images": [
      "12hPXWgZq_j3I3-cSFSQj5lL9fpBeHv94",
      "1CVLR2wUU9Doi6yUStviijJ_94TSrnVZO",
      "18fyfyxaChyJCvnM1o_iU896BTfiecig_"
    ],
    "featured": false
  },
  {
    "id": "deportivos-1pWTFHRW",
    "name": "M 197",
    "categorySlug": "deportivos",
    "categoryName": "Deportivos",
    "priceUsd": 48,
    "movement": "Digital / Ana-Digi",
    "strap": "Silicona / Resina",
    "waterResistance": "5 ATM / Uso diario",
    "images": [
      "1jO2qM6V6vvG6vCltiPApMc6iRq0rVvyd",
      "1sVBZ2WrgbiRmBomSz9L48mhhmUWr_HIN"
    ],
    "featured": false
  },
  {
    "id": "deportivos-18E8Y3wd",
    "name": "M 286",
    "categorySlug": "deportivos",
    "categoryName": "Deportivos",
    "priceUsd": 50,
    "movement": "Digital / Ana-Digi",
    "strap": "Silicona / Resina",
    "waterResistance": "5 ATM / Uso diario",
    "images": [
      "1EI74XRMDyXOCeP_LnQhyRPDpCboT-HPk",
      "1TYZGXLJfXn_NSGz9Srz17jv5Ou74ygsf",
      "1koWWWBadmvp469fa57ZmSvrugouAHAmj"
    ],
    "featured": false
  },
  {
    "id": "deportivos-1RajsZiG",
    "name": "M 319",
    "categorySlug": "deportivos",
    "categoryName": "Deportivos",
    "priceUsd": 42,
    "movement": "Digital / Ana-Digi",
    "strap": "Silicona / Resina",
    "waterResistance": "5 ATM / Uso diario",
    "images": [
      "1qlMMWIaSKfE9P8vwEySmFhTrqULgNuvH",
      "1w8o7bx0mHiGx4DQVwja84VbvcO0S6OsT",
      "1eHMaBQ053ExMC3bzcb0RSIM6q6YzO5tB",
      "1cpsWGLh1H0TR7Ton7Wm45sBMBSFy8XXY"
    ],
    "featured": false
  },
  {
    "id": "deportivos-1tMd9DMP",
    "name": "M 340",
    "categorySlug": "deportivos",
    "categoryName": "Deportivos",
    "priceUsd": 44,
    "movement": "Digital / Ana-Digi",
    "strap": "Silicona / Resina",
    "waterResistance": "5 ATM / Uso diario",
    "images": [
      "1Oalwb6Ho0Wa-hVicEtfgAReyBi2klhhW",
      "1Vk0oCYHDcE6YisWukXtUsAMKur7TyHt-",
      "1mAI6REiA09p6G1soZy0XKmJbnFydrznh"
    ],
    "featured": false
  },
  {
    "id": "deportivos-1U58DFW-",
    "name": "M 341",
    "categorySlug": "deportivos",
    "categoryName": "Deportivos",
    "priceUsd": 46,
    "movement": "Digital / Ana-Digi",
    "strap": "Silicona / Resina",
    "waterResistance": "5 ATM / Uso diario",
    "images": [
      "1x8YeuT7LOWjPkc9JfHOwzGoLw2gVcsL_",
      "1IiG0XiH-j5F9vqztm70wAQyg_mpY6e3A",
      "1wuGvfbmWEezjVMHkf7IQPDr3s4L_tYS4"
    ],
    "featured": false
  },
  {
    "id": "deportivos-1CU5wXak",
    "name": "M 346",
    "categorySlug": "deportivos",
    "categoryName": "Deportivos",
    "priceUsd": 48,
    "movement": "Digital / Ana-Digi",
    "strap": "Silicona / Resina",
    "waterResistance": "5 ATM / Uso diario",
    "images": [
      "1apA4z11zIVXG1o2l0HI3RIiXP316aTmp",
      "1LoyTCKVNYaTC-BJiizAKhfwFnYtnd0hs",
      "1-gBxbGKs9WEmDbJjCEn79I7JFwgj2eDb"
    ],
    "featured": false
  },
  {
    "id": "deportivos-1Z5tB1G8",
    "name": "M 347",
    "categorySlug": "deportivos",
    "categoryName": "Deportivos",
    "priceUsd": 50,
    "movement": "Digital / Ana-Digi",
    "strap": "Silicona / Resina",
    "waterResistance": "5 ATM / Uso diario",
    "images": [
      "1PdlqeHjmU-_xvCOcrAtTxpkOXjlNKAkC",
      "1GmmJFs5SO-2T8MXs_iB-8iVjKk0qRSkL",
      "1vcKVUAGjsmr8aWkQ_Q7SBwRDT6F_0AUe"
    ],
    "featured": false
  },
  {
    "id": "deportivos-1_CLmFBT",
    "name": "M 348",
    "categorySlug": "deportivos",
    "categoryName": "Deportivos",
    "priceUsd": 42,
    "movement": "Digital / Ana-Digi",
    "strap": "Silicona / Resina",
    "waterResistance": "5 ATM / Uso diario",
    "images": [
      "1NgtZJ1g2qnyx6hLwubcDC1rBjyDT9Kmq",
      "1JwgAcUGZloteX4r4DgeKely38mWKCjRC"
    ],
    "featured": false
  },
  {
    "id": "deportivos-1fd21Rrx",
    "name": "M 352",
    "categorySlug": "deportivos",
    "categoryName": "Deportivos",
    "priceUsd": 44,
    "movement": "Digital / Ana-Digi",
    "strap": "Silicona / Resina",
    "waterResistance": "5 ATM / Uso diario",
    "images": [
      "1Ham7nVSckqONEA3TgP7_rvssvxA8tfLB",
      "1t0jFYVZm213v2AZbGoZL_I7J06rFe16u"
    ],
    "featured": false
  },
  {
    "id": "deportivos-1xTMSbt8",
    "name": "M 354",
    "categorySlug": "deportivos",
    "categoryName": "Deportivos",
    "priceUsd": 46,
    "movement": "Digital / Ana-Digi",
    "strap": "Silicona / Resina",
    "waterResistance": "5 ATM / Uso diario",
    "images": [
      "1_KEGIHiYDYm0c6ZCwD0NVsO9UHlk_Eb5",
      "1RkGxjjd9GbhfNqj2fgKEmxOo3xigUB9R"
    ],
    "featured": false
  },
  {
    "id": "deportivos-11mKz92a",
    "name": "M 355",
    "categorySlug": "deportivos",
    "categoryName": "Deportivos",
    "priceUsd": 48,
    "movement": "Digital / Ana-Digi",
    "strap": "Silicona / Resina",
    "waterResistance": "5 ATM / Uso diario",
    "images": [
      "1AlX9wAYzoY5EVE3PuNCUYOSFLENHiDhU",
      "1r5Gkzn13-qkCYVAAy1CmQW-lPdtBapWE"
    ],
    "featured": false
  },
  {
    "id": "deportivos-1Zgm3y0y",
    "name": "M 356",
    "categorySlug": "deportivos",
    "categoryName": "Deportivos",
    "priceUsd": 50,
    "movement": "Digital / Ana-Digi",
    "strap": "Silicona / Resina",
    "waterResistance": "5 ATM / Uso diario",
    "images": [
      "11nZ5JcMH1HmbhrWvVLyfVxZY7-0bXaRM",
      "1tRKHGn0A60k0nH3wQLoiPQ7QDZqMniRf"
    ],
    "featured": false
  },
  {
    "id": "deportivos-1u5FQJkC",
    "name": "M 357",
    "categorySlug": "deportivos",
    "categoryName": "Deportivos",
    "priceUsd": 42,
    "movement": "Digital / Ana-Digi",
    "strap": "Silicona / Resina",
    "waterResistance": "5 ATM / Uso diario",
    "images": [
      "1DIc_sGfXAXoYFZR6XyaEzkS7h_MR6T03",
      "1GkGdDiqqE--tqVaZeklHuXqs9p5wymHl",
      "1Vc6FEaNuC3Xy5E6yzVxfoN1LKpHO8mlc"
    ],
    "featured": false
  },
  {
    "id": "deportivos-1o-Jzq-j",
    "name": "M 358",
    "categorySlug": "deportivos",
    "categoryName": "Deportivos",
    "priceUsd": 44,
    "movement": "Digital / Ana-Digi",
    "strap": "Silicona / Resina",
    "waterResistance": "5 ATM / Uso diario",
    "images": [
      "1Rqen1ehqxgTQfFTbTfbzH5LGs5vKT710",
      "1tW3Hk5zgsvek784SNjrtJkaldecGvYGg",
      "12J659ifTGEkRk6wnTgpNw00ykHljEb8K"
    ],
    "featured": false
  },
  {
    "id": "deportivos-1DrVWCX5",
    "name": "M 359",
    "categorySlug": "deportivos",
    "categoryName": "Deportivos",
    "priceUsd": 46,
    "movement": "Digital / Ana-Digi",
    "strap": "Silicona / Resina",
    "waterResistance": "5 ATM / Uso diario",
    "images": [
      "1InI12fMLzv84VOPloIaI8cIigEAtn6LS",
      "1D-K5j2OkWK-rLI4sBCPnplRu8Dxs1szv",
      "1Y_FXJ0eYTWBBdNzOGyqmrxv5U6ntUwRh"
    ],
    "featured": false
  },
  {
    "id": "deportivos-1G8ULjII",
    "name": "M 360",
    "categorySlug": "deportivos",
    "categoryName": "Deportivos",
    "priceUsd": 48,
    "movement": "Digital / Ana-Digi",
    "strap": "Silicona / Resina",
    "waterResistance": "5 ATM / Uso diario",
    "images": [
      "1mJjswdzSVVHb4_o6vb-WUOFFAbkS64RF",
      "1KJ_MDUuyk-ztA3nUCvN9aiwNX6OJBpFO",
      "1QQ4ODSRiVNK70g5PBrjDXQyzmC4Y8NvH"
    ],
    "featured": false
  },
  {
    "id": "deportivos-1ZRW-aYS",
    "name": "M 361",
    "categorySlug": "deportivos",
    "categoryName": "Deportivos",
    "priceUsd": 50,
    "movement": "Digital / Ana-Digi",
    "strap": "Silicona / Resina",
    "waterResistance": "5 ATM / Uso diario",
    "images": [
      "1jhagTfm2EocO44AkwSMguUDJZzP7xl9G",
      "1wTAiTxvI_oPvoNRjEGsuSNCi46Sc8vvf",
      "17Vwz-G_XiVYEdCVJX_amo3gX02AZ_cer"
    ],
    "featured": false
  },
  {
    "id": "deportivos-1lvQ3Ekx",
    "name": "M 362",
    "categorySlug": "deportivos",
    "categoryName": "Deportivos",
    "priceUsd": 42,
    "movement": "Digital / Ana-Digi",
    "strap": "Silicona / Resina",
    "waterResistance": "5 ATM / Uso diario",
    "images": [
      "1AQdmtWvzMsQfC-osSE0Fvzkw8WsMwITZ",
      "1bW665CZVUG_TfeoOI4mW8vTU2l5jLlOY",
      "1WSGrmwnL_BJpeIDxhFQv3OZ0hqCpLmWD"
    ],
    "featured": false
  },
  {
    "id": "deportivos-1Dyb7gTQ",
    "name": "M 364",
    "categorySlug": "deportivos",
    "categoryName": "Deportivos",
    "priceUsd": 44,
    "movement": "Digital / Ana-Digi",
    "strap": "Silicona / Resina",
    "waterResistance": "5 ATM / Uso diario",
    "images": [
      "1hlCNYM1RVWuIQi-4jR-5MXwCTSPOWvnJ",
      "11IXM2eopOCPtJROujP7XUcU8dkgYWkrC",
      "1nIE56_XpYfbWM0yoT5u0xt1bPDRuvNyL"
    ],
    "featured": false
  },
  {
    "id": "deportivos-1mbyeI17",
    "name": "M 370",
    "categorySlug": "deportivos",
    "categoryName": "Deportivos",
    "priceUsd": 46,
    "movement": "Digital / Ana-Digi",
    "strap": "Silicona / Resina",
    "waterResistance": "5 ATM / Uso diario",
    "images": [
      "1UwiikRk2oRzHaR78wj-zSxJRsO6bEJ9I",
      "1BCHsEcmh_WkVeqHAx3AKrfn3iZFUNxIw",
      "1qu9rWkHmQiARyq9TzAD-qoI7YrC_0_xv"
    ],
    "featured": false
  },
  {
    "id": "deportivos-1tW-SKUx",
    "name": "M 371",
    "categorySlug": "deportivos",
    "categoryName": "Deportivos",
    "priceUsd": 48,
    "movement": "Digital / Ana-Digi",
    "strap": "Silicona / Resina",
    "waterResistance": "5 ATM / Uso diario",
    "images": [
      "1PDeMcATgWOPCtaV3sTyMitJPnE4SGxlH",
      "1tSMIXhRyEa5dEabI0ZCWbqKCgCrcM2DF",
      "1XA9N7Klm0g_6xvBmFj-ZS7opHdprp9tb"
    ],
    "featured": false
  },
  {
    "id": "deportivos-1iOxOk5j",
    "name": "M 372",
    "categorySlug": "deportivos",
    "categoryName": "Deportivos",
    "priceUsd": 50,
    "movement": "Digital / Ana-Digi",
    "strap": "Silicona / Resina",
    "waterResistance": "5 ATM / Uso diario",
    "images": [
      "1RkJISYKmfLCQc-Oyhs1UOzqdTykn70dV",
      "1dvNioPmRiHk68OX3BCrYJjxco6G2pzXN",
      "1U0LleRSUhAxanQOJaXgE0dg2vUT0-JqM"
    ],
    "featured": false
  },
  {
    "id": "deportivos-1HTOz8BN",
    "name": "M 373",
    "categorySlug": "deportivos",
    "categoryName": "Deportivos",
    "priceUsd": 42,
    "movement": "Digital / Ana-Digi",
    "strap": "Silicona / Resina",
    "waterResistance": "5 ATM / Uso diario",
    "images": [
      "1gyqT_lcnzqXVM9Ok_-OWdoCljajSGtg3",
      "1svH2jXY6YWS0PYfEtdOAf-z8qknHMzEY",
      "1gJAbAaNwQtbw51-MFGQK9HkRAGK87I7S"
    ],
    "featured": false
  },
  {
    "id": "deportivos-1Yk3BS6V",
    "name": "M 374",
    "categorySlug": "deportivos",
    "categoryName": "Deportivos",
    "priceUsd": 44,
    "movement": "Digital / Ana-Digi",
    "strap": "Silicona / Resina",
    "waterResistance": "5 ATM / Uso diario",
    "images": [
      "1b1au8UkroQlE4Zp-eR7UfPH_ZVlns5xc",
      "1bV9I3aNFPlaCTV3KFplJeCXh_SBsRfO5",
      "1jofIzp7R3JOwoKt_iYKWZgyWgaYoDdJh"
    ],
    "featured": false
  },
  {
    "id": "deportivos-16oqR13I",
    "name": "M 380",
    "categorySlug": "deportivos",
    "categoryName": "Deportivos",
    "priceUsd": 46,
    "movement": "Digital / Ana-Digi",
    "strap": "Silicona / Resina",
    "waterResistance": "5 ATM / Uso diario",
    "images": [
      "1-OgNZRCB67k6jrP0ygYALCi1rHXPCCd5",
      "18Y_Whc2uv2PZpEdbskP-eQdkus5IeTcL",
      "1HTHqjqZZ3p7G7paJloxVdoTWTHV4yYRa"
    ],
    "featured": false
  },
  {
    "id": "deportivos-1qW6V7RO",
    "name": "M 383",
    "categorySlug": "deportivos",
    "categoryName": "Deportivos",
    "priceUsd": 48,
    "movement": "Digital / Ana-Digi",
    "strap": "Silicona / Resina",
    "waterResistance": "5 ATM / Uso diario",
    "images": [
      "1iDqqTdrXHgtYCVXZDPQZt_ZcLa60I5bF",
      "1hKP1BZzufVIstNnCsKpCN3OUFJLBfiL-",
      "1iAWbIoy1fu-6TpyQFDVjHLIK34GjzaMC"
    ],
    "featured": false
  },
  {
    "id": "deportivos-1xYvZtcp",
    "name": "M 384",
    "categorySlug": "deportivos",
    "categoryName": "Deportivos",
    "priceUsd": 50,
    "movement": "Digital / Ana-Digi",
    "strap": "Silicona / Resina",
    "waterResistance": "5 ATM / Uso diario",
    "images": [
      "1zThF4PfMDvSd2DW7MNeHhJkli6lWhrqR",
      "1wvvwfnAvkVapqjEHOCJkzPXPdO1GJD4r",
      "15FE3OtM-yLEBA8PgX37cmfXssj0LNAB_"
    ],
    "featured": false
  },
  {
    "id": "deportivos-1rGcAlEA",
    "name": "M 385",
    "categorySlug": "deportivos",
    "categoryName": "Deportivos",
    "priceUsd": 42,
    "movement": "Digital / Ana-Digi",
    "strap": "Silicona / Resina",
    "waterResistance": "5 ATM / Uso diario",
    "images": [
      "1k5p9F6joKQg9q42NYClvchb1SOe9iS8e",
      "1TqnAHASZ_KWPyFIa4d2YQe4DU8dDHtF8",
      "1_gksTM7b9LvbdVm37tZQ2cWx40vDUJyb"
    ],
    "featured": false
  },
  {
    "id": "deportivos-1kqjRBHA",
    "name": "M 387",
    "categorySlug": "deportivos",
    "categoryName": "Deportivos",
    "priceUsd": 44,
    "movement": "Digital / Ana-Digi",
    "strap": "Silicona / Resina",
    "waterResistance": "5 ATM / Uso diario",
    "images": [
      "1CJFdnTX5aLkSZ3yAEc-b260Gcw4dLylP",
      "1DT2nNq5_W4NDnANcGTO6yNriiMdsm92F",
      "1FoN6ZFDc9F0W30bGHXvPAnZrVuG_r6oW",
      "1Tk8k9roUleQ6tb5hIhSBhAvthhRdRtLJ"
    ],
    "featured": false
  },
  {
    "id": "deportivos-10BcyLI7",
    "name": "M 388",
    "categorySlug": "deportivos",
    "categoryName": "Deportivos",
    "priceUsd": 46,
    "movement": "Digital / Ana-Digi",
    "strap": "Silicona / Resina",
    "waterResistance": "5 ATM / Uso diario",
    "images": [
      "1Qr6X7q8yoey0-x32xsRLm2_1F0b8tjTf",
      "1zQfMwQsBH_mB5_Qvt7U30e6-ItaPBaOo",
      "1jwqAOGXhdRyw8aCD3-9owMriSXwRQ-Pj",
      "1aO1DdDtCEylOcqv12tugv6-kQ4TggKJ8",
      "10eqFEDigt_-XfEoKZU2rj-gf0VkG00rO",
      "1kXbA0572rLl-dW1jcgn7LV0U7rKGuNUe"
    ],
    "featured": false
  },
  {
    "id": "g-shock-1Dz-quOc",
    "name": "G-Shock C46 Edición Especial",
    "categorySlug": "g-shock",
    "categoryName": "G-Shock",
    "priceUsd": 65,
    "movement": "Digital / Ana-Digi",
    "strap": "Silicona / Resina",
    "waterResistance": "5 ATM / Uso diario",
    "images": [
      "1qnR0gDgtkXHKkvpfOuq9fCmGiKkxomm5",
      "1yq-L3ZhzXg3SkGxdZ22PGHCqnwIyrMJo",
      "1f3oPbqEjcwF2IYwoiZCUVVmuh2Peow1H",
      "1ZQxBNyK8seBefNV-UU5g4A1ZCl3U42m0",
      "1D6XWx2sK2emT_7eyD2t7bA5RRBUqxUwT",
      "1lO6JPkNirMgRZ4sGrQjvPx3if9qIsnlc",
      "1mOygGsopCvRr13QAo_89AfjFmnpb_d3X",
      "1xZg68_VzwoeWbzAoBDAxJKDlP7f9W70l",
      "1VHxdFfwuFtD7_xU_jLnF5VBgjvBWggTC",
      "1-kppStAGB7dtmJBTh7b1HGzqo8CP7OEN",
      "125JGfdCDeC1rm3Mj00ckNwzKdtFfEPAh",
      "1cnp4Y1OEaoAuBvzm9WaaQlBEH9X_HU9M",
      "1iHEwqTAVSdbAdaiCpHRn0kI_kCMPszTC"
    ],
    "featured": false
  },
  {
    "id": "hublot-1sSevN2P",
    "name": "HUBLOT AUTOMATIC AG",
    "categorySlug": "hublot",
    "categoryName": "Hublot",
    "priceUsd": 165,
    "movement": "Automático",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1SLLFB8RD1eUQeegB_MPDLmEw2YRcsW1b",
      "1m9yMCzFDrvgHuNwjm_a_0tAVVHBFwmK6",
      "10nzMjZnTnSuN0JhlO1wiL0Faf_cKd64X",
      "1s4N1msmwue1BbONQ2sBKRT50yQ8ZmwHM",
      "1kxj9I2c4Cd5HKfEjK1lU8XnUw3flftzt",
      "1uow1sLVDV94Ib_09fludse3U8e7AmaXv",
      "1gWAyjhTFWqPCRswO84n3svb6IvOwYVti"
    ],
    "featured": false
  },
  {
    "id": "hublot-1TDoCpU9",
    "name": "HUBLOT AUTOMATIC PN",
    "categorySlug": "hublot",
    "categoryName": "Hublot",
    "priceUsd": 165,
    "movement": "Automático",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1P7yQdCKiG0bzqFq5sexHclARBIEUQDtT",
      "1BZheq6RRTq0IP9k2Reu1GUh4uNqNbUZ7",
      "1blKWbilbvaQyahFtOd67bxjjqAZvhAB5",
      "1eafhtAQZlcbmDqQuJz8dQbosJB9891cM"
    ],
    "featured": false
  },
  {
    "id": "hublot-1KpD275B",
    "name": "HUBLOT COPA MUNDIAL BYZ",
    "categorySlug": "hublot",
    "categoryName": "Hublot",
    "priceUsd": 149,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1PfnXwf7iy_YTC_iuuuuGNejcjV42OnEk",
      "11rvhQb01BJTRajzo83rdbNuQTdtUTmuw",
      "1D29M9Ki7tCTPPWYdH7OO3sBAiVhMjFkh",
      "1MC4tDN-s4LQPfImK7cjpFUv_TbcwH8ye",
      "1KrEJMYYLOdbH_Liua12Dp40riOLCvK1Y",
      "1VnN88HGUy8B1LArHyk6Hs92D_8ZEO1OD"
    ],
    "featured": false
  },
  {
    "id": "hublot-1SdOukzb",
    "name": "HUBLOT COPA MUNDIAL N",
    "categorySlug": "hublot",
    "categoryName": "Hublot",
    "priceUsd": 151,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1M1PGYdrjPwy6VtbjRrpw-i7nz57Q7-Mm",
      "1gqWveFBM65hNRhnNHn6P-NXpuYRTszrX",
      "1i5I5xJiodeFB0MxYjHgLMvuGHlSswBRP",
      "1zNIryqTQCNODE9_7FFiUBO_I0wnIE97B",
      "1y0aQQ1IOWGbI5_EHGp-dHBm2ZQ_VVsKp",
      "1vL2ZzM5dP5UGMnkxtEgI79R_OO0Wztpd",
      "1IcYV7_M3oXugSVOqOCo9BDeyOQmu-4gn",
      "1aBs6cLZlhIXbDVUt930h0nX8um6242Vo"
    ],
    "featured": false
  },
  {
    "id": "lacoste-1h5Vl_Fy",
    "name": "L44",
    "categorySlug": "lacoste",
    "categoryName": "Lacoste",
    "priceUsd": 78,
    "movement": "Cuarzo de Precisión",
    "strap": "Aleación metálica",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1Px0j3zlXq8avO59DZKs6BmJhR-XdW3iM",
      "1fNS0LhnP3izVfs52thF8EkgPx2WbkEHs",
      "1mceUHvalGw0uVLEIZPZS4c1O2TmMV3N8"
    ],
    "featured": false
  },
  {
    "id": "metal-1GpaaLMN",
    "name": "C M 40",
    "categorySlug": "metal",
    "categoryName": "Línea Metal",
    "priceUsd": 46,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1ZLdS3RqTXdtlRUMPx622eZQ6Iki_g1X4",
      "1wfRhDEERLw9Opek4fCTIK3C2yED_Oy4Z",
      "1-VoBUM5LMHcsvoNjebXVxex6jfii0C3t",
      "1-qpbfD9yWRIOhk6ozM5i5vJascGz-LQK"
    ],
    "featured": false
  },
  {
    "id": "metal-1q-_-tDy",
    "name": "C M 47",
    "categorySlug": "metal",
    "categoryName": "Línea Metal",
    "priceUsd": 48,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1JtL0VUOBrSJ_YoB-Ulf6nB4Gl338J9RI",
      "1b2PhPs6phrpDqxIizBBiqyY4-Fp_LZ8a",
      "1APJsc6F6suW82g2QnopFc1dqARfNIckh",
      "1dFGLJMge7yMffeMFfrNgC3m9SvobkjbJ",
      "1br-4gkdxxzaBBbnAN36xmvEUypZDVQqz",
      "1duyjBFNwqwkHjr9g-qg-V7IHKXcW1FW0"
    ],
    "featured": false
  },
  {
    "id": "metal-1wbc-YKd",
    "name": "C M 114",
    "categorySlug": "metal",
    "categoryName": "Línea Metal",
    "priceUsd": 50,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "19ysDRv2fS_jZzLckwl_hXfCV7h36sV3F",
      "1iTKTKlQvMtWaksXyd2Aa8JImG5-uCOXF",
      "1AQa10SzLrPHzwtxgMs83sXtSuG5OjQiW",
      "1-G4ieogb8lQvWXCTvkLGZUJfEleA5Kx0",
      "1mHXj-L60i-5azWd96lgNim_cOssEmHP1"
    ],
    "featured": false
  },
  {
    "id": "metal-1uvjxHNb",
    "name": "M 01",
    "categorySlug": "metal",
    "categoryName": "Línea Metal",
    "priceUsd": 52,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1mOryWB3Km6631HJpt6xC5qWc1_8Bgte-",
      "1eCzwf_34kxAQVDLBPersSiDuRotOkKlW",
      "1RyM96LVYfcgvQtWx10Q5BXpPHh9zjmkd"
    ],
    "featured": false
  },
  {
    "id": "metal-1YL5h8EG",
    "name": "M 02",
    "categorySlug": "metal",
    "categoryName": "Línea Metal",
    "priceUsd": 54,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1cCoC9qopyMExK-8Z0FwgZro2ogydNkkK",
      "1XeFc68jespAMT4v6RdgnRNbnP8Y_s9i_",
      "1SGG3eGJ_9ciqT_6cIGWlahPPwgjE9DPm"
    ],
    "featured": false
  },
  {
    "id": "metal-1SHQTY1K",
    "name": "M 14",
    "categorySlug": "metal",
    "categoryName": "Línea Metal",
    "priceUsd": 46,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1KToujy1M2bV-tJjH3RPQWAZmt_v7f00V",
      "1stNrxiKgWC7_IX66w-2FPQmV4OZHy8wH",
      "14JidVU3LVHb3wvY9RQ7896FmX5h8m2oG"
    ],
    "featured": false
  },
  {
    "id": "metal-1w9UwLtX",
    "name": "M 22",
    "categorySlug": "metal",
    "categoryName": "Línea Metal",
    "priceUsd": 48,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1Enr8zRxPXqk7r5mHBaxZwo3-S1BUGaii",
      "11zhfeU5yFnXlYnaJDrYazNIq5Rn-PS8r",
      "1UeJKMnwiC0_N7yRbhuved2nj0NOSGeiE",
      "1pfUrJPYmHti02j_1vVn61MdDTXNN7ok1"
    ],
    "featured": false
  },
  {
    "id": "metal-1FolNtJ2",
    "name": "M 28",
    "categorySlug": "metal",
    "categoryName": "Línea Metal",
    "priceUsd": 50,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1i6S9wZzeh7s0osdgzvauCZjFA_u88WeD",
      "1fW865a3bRq0WdLlNSD9YRM0d0v7fXKtQ",
      "1-xSKEKdyIvqQnUoQNvCsqVaetyogZBjs",
      "1xAkKtTWUcUo6pKiZTI9YUVGy90gIe9v4"
    ],
    "featured": false
  },
  {
    "id": "metal-1szBL9HP",
    "name": "M 35",
    "categorySlug": "metal",
    "categoryName": "Línea Metal",
    "priceUsd": 52,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1TboHGCwPAy-RdiOLIo6GmR54kFCgrI1h",
      "1-mEJyLvIX9UXDh1o0s7lC2hUuaftRuE5",
      "1DO_NG8haTW8woJHEICo2fqE8m4L9JKGH",
      "1lDy35NCQMZpJ9pUchVOsetHwxUTGKCkt"
    ],
    "featured": false
  },
  {
    "id": "metal-1SW3O1Pk",
    "name": "M 36",
    "categorySlug": "metal",
    "categoryName": "Línea Metal",
    "priceUsd": 54,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1AP54k3zCMUB4ytkewI_a3bUCNU0qULi1",
      "1Gc018BNuH-R111Jjl83V7t96UegzXCtN",
      "1NU_tCXtrATv4vvv2oVQ1HQ2012u0zkHM",
      "15J5PZX9JP2m7Y68B5HS-XXa2NrLQEOAI"
    ],
    "featured": false
  },
  {
    "id": "metal-1zuc3Be8",
    "name": "M 37",
    "categorySlug": "metal",
    "categoryName": "Línea Metal",
    "priceUsd": 46,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1zVxaSg1dl5-dWm6CUnGv7KI9pCvdrk3P",
      "1oVDFVktWEu7TR-yqfTGh-PJYqb4ZtzbS",
      "1S1-sY8-rfhHQgByqwHu-rQCuvR1--2Gn",
      "1NqsTaDwatSMIQPhPJZU1IZ1NtUQcHGON",
      "1wcbNOeRI2GuMCRQNav55ZEMulak6SUyK"
    ],
    "featured": false
  },
  {
    "id": "metal-1beY5TZI",
    "name": "M 39",
    "categorySlug": "metal",
    "categoryName": "Línea Metal",
    "priceUsd": 48,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1KqX7pvlTfjmzEFYoUrTnsTQ-gRml1ydk",
      "1mfj0hnj5X_rrxNOMVYzn1gRVPcjCh_tU",
      "1BWIVubzrZvmMKeGWJBwyaFyu42Ts_ykS"
    ],
    "featured": false
  },
  {
    "id": "metal-1I23ihuu",
    "name": "M 48",
    "categorySlug": "metal",
    "categoryName": "Línea Metal",
    "priceUsd": 50,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1weqKFE9PgfM8M6TSHeYFdBBV7FCSvCUk",
      "13euqRT730jO54FFT8xedD6CJmh1XYv_T",
      "1WorWyET11ELNL39cfjmPzM7ej2NV9FGC"
    ],
    "featured": false
  },
  {
    "id": "metal-1tmPojjU",
    "name": "M 88",
    "categorySlug": "metal",
    "categoryName": "Línea Metal",
    "priceUsd": 52,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1QDSDwCSVF4BNsng98ALNsDHyJHa33gNp",
      "1nUg-7zTUSic9vAC-rdMl6TbgF6CPZeaL",
      "1f0TNIezYaf99Oal6_CEnk1hJY_oCs_CR"
    ],
    "featured": false
  },
  {
    "id": "metal-1YrYtMg3",
    "name": "M 92",
    "categorySlug": "metal",
    "categoryName": "Línea Metal",
    "priceUsd": 54,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1gkUOJvEygc_7oahKL9GSPMQ-a9IojZMv",
      "1ENkeFN9m-6MbhIO2Xz8euFD5QCMKb9pZ",
      "1BHgnxZgcyHR8llyJHIQDLFwYWaKt8n-H"
    ],
    "featured": false
  },
  {
    "id": "metal-1Tji3baP",
    "name": "M 93",
    "categorySlug": "metal",
    "categoryName": "Línea Metal",
    "priceUsd": 46,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1MdIq5zH4iFmGtHE27KAlU5zG8uHg3bRv",
      "14mPWhyZqCNEviowXOPvUYOnkXkMeOEHO",
      "1KQz80XprUltNuR3EtpxlafeYorywC1dM"
    ],
    "featured": false
  },
  {
    "id": "metal-1mN67kwi",
    "name": "M 255",
    "categorySlug": "metal",
    "categoryName": "Línea Metal",
    "priceUsd": 48,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1vlvEyPqCdBj3zA8ZGJvz19UJyVtqUpCd",
      "1Y36FelCUQRjjhOqHE9w8R3SslLbokDZA"
    ],
    "featured": false
  },
  {
    "id": "metal-1LdmZ6jo",
    "name": "M 256",
    "categorySlug": "metal",
    "categoryName": "Línea Metal",
    "priceUsd": 50,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "19CYDn5vHTWLocds9t3RJbSKsIymtywWG",
      "1YDuG1LyZCstJT2x7pH3ElfeW8ZJ83Abi"
    ],
    "featured": false
  },
  {
    "id": "metal-1tZp96Nz",
    "name": "M 262",
    "categorySlug": "metal",
    "categoryName": "Línea Metal",
    "priceUsd": 52,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1Ozuhuh7rx5lkoIUy7NY2vldtWiN6HdND",
      "1CDqbDn7uMR5tq8fl7lRgKEy1OA8jfY3r"
    ],
    "featured": false
  },
  {
    "id": "metal-1rsmQXWn",
    "name": "M 263",
    "categorySlug": "metal",
    "categoryName": "Línea Metal",
    "priceUsd": 54,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1CDrz1lur4J-annrSb_uXzh-Yh3r-o5Ar",
      "1ww6_qxBds7tbbZBaIDBN0rVT-ULaaoXG"
    ],
    "featured": false
  },
  {
    "id": "metal-1gt3JN2K",
    "name": "M 264",
    "categorySlug": "metal",
    "categoryName": "Línea Metal",
    "priceUsd": 46,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1PmhjDgKblTbfFM8T2IRNPP4ksM3ZXrek",
      "1oCaSPTjYNCKTG4z4Iqk7R3kkvEpByQYa",
      "1xC3cuWCz3Y7t3MSdYpIZ_PkE3b1D8qNO"
    ],
    "featured": false
  },
  {
    "id": "metal-1EyD50Z-",
    "name": "M 435",
    "categorySlug": "metal",
    "categoryName": "Línea Metal",
    "priceUsd": 48,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1dBXVtmswH2VwM2De6bb2Y82f8Cq3dlJq",
      "1wQcpYAeVF86NI9tKiaY_M395PkTE8vMz",
      "1gBJIfMHOmrpc4SU-doyyFtSH6JJGI-ei"
    ],
    "featured": false
  },
  {
    "id": "metal-1oj_kPUn",
    "name": "M 436",
    "categorySlug": "metal",
    "categoryName": "Línea Metal",
    "priceUsd": 50,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1QeXVgj-mkoCCcv6Lhn5JAl80NHj2ILay",
      "1RQEUxC2B3kSctbRaGj8GdaverDf46SKB",
      "18hi-Eu3I9LmBRcWQ6TLtvVEG7Ui5Hro1"
    ],
    "featured": false
  },
  {
    "id": "metal-1W2C0R0j",
    "name": "M 437",
    "categorySlug": "metal",
    "categoryName": "Línea Metal",
    "priceUsd": 52,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1eUrdGvZ22JJD_RVDMh_yNITFpqtkn_WC",
      "1e0-La-GR-H1Qgyc0ftVdHgAEP_mWVyZ9",
      "1VVEsNO5j5Zqux-_5Sh7O-v1pkL_eZl2D"
    ],
    "featured": false
  },
  {
    "id": "metal-14SknuQO",
    "name": "M 438",
    "categorySlug": "metal",
    "categoryName": "Línea Metal",
    "priceUsd": 54,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1016_Hank_V6jb_Nhb4k7L66c9Surt8nW",
      "1MqjzXejp27LOuyXjjZ5jl-Txafof86xF",
      "1otDMnQVAZrGjETXaLUfn_AuJfqoTHvN3"
    ],
    "featured": false
  },
  {
    "id": "metal-1spFC3HV",
    "name": "M 439",
    "categorySlug": "metal",
    "categoryName": "Línea Metal",
    "priceUsd": 46,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "10KG5oYMg9qpTORxTpVUwIRrVZWOUlDfh",
      "1rrra-c9g2R5ALhvsQNdSj4tTJ6RwfVcA",
      "1UNM5S_ViTWhar_CLgj0e_ZiefgbpBwDd"
    ],
    "featured": false
  },
  {
    "id": "metal-1035FccW",
    "name": "M 440",
    "categorySlug": "metal",
    "categoryName": "Línea Metal",
    "priceUsd": 48,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1uiAeGQbB1qCEfJv9BF3nyVary8c6DWRW",
      "1SblKCF00pUKjgmoacJoL3PpV9LuRjjTx",
      "1WLks5EQaMGWM3MJSE4ShuHS0IUtrRKA3"
    ],
    "featured": false
  },
  {
    "id": "metal-1i65atpb",
    "name": "M 441",
    "categorySlug": "metal",
    "categoryName": "Línea Metal",
    "priceUsd": 50,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1dALY7Y66Q1HQ9qSr9gmk6x4jJN1bpqAw",
      "1GiRxkrd1QWhowQ5SsrvHImUr9K_efpHV",
      "1jnx2yqD6sEeBqUyCdBKeSM0LDHwhiE_3"
    ],
    "featured": false
  },
  {
    "id": "metal-1Y287JC2",
    "name": "M 442",
    "categorySlug": "metal",
    "categoryName": "Línea Metal",
    "priceUsd": 52,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1uHecZz97rnS-KxYAN2y7dBICBnKse8xf",
      "1lzPGBnoBjL3MazXoNgnGd4ueA89G6I27",
      "1seO9gkzosCtTWMztNDZ7nIfcygwG_VNU"
    ],
    "featured": false
  },
  {
    "id": "metal-152HZLeY",
    "name": "M 443",
    "categorySlug": "metal",
    "categoryName": "Línea Metal",
    "priceUsd": 54,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1JtgOHwmOod6ARL3ekXJQ5pekwgdYVmYT",
      "1_BqLWzmXc_DMsEdMvZdj_m4IlAT3lCxp"
    ],
    "featured": false
  },
  {
    "id": "metal-1eP3sgLm",
    "name": "M 444",
    "categorySlug": "metal",
    "categoryName": "Línea Metal",
    "priceUsd": 46,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1CXbSn1t-gVMa_gndG0vghuYk6MF-vU_g",
      "1slM9lxu0_aSHtpMwcXno93wvRoB5XMTi",
      "1kfjWAzoCSpvgm3cerIJJI2dE-0Jquq9Z"
    ],
    "featured": false
  },
  {
    "id": "metal-1XaJJaUb",
    "name": "M 445",
    "categorySlug": "metal",
    "categoryName": "Línea Metal",
    "priceUsd": 48,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "14St4CeTzLButJbY3NrrI4L8sjLCu7oZz",
      "10-_wsuVxekzuSfVpKUawDCzi4zsVZJp8",
      "1pwu9vvo2KfW2oGUv_pLwpnbVRRzkErab"
    ],
    "featured": false
  },
  {
    "id": "metal-1wSKq3bY",
    "name": "M 470",
    "categorySlug": "metal",
    "categoryName": "Línea Metal",
    "priceUsd": 50,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1QPrVRWCjlh5wr0JRaWVJBku2l7_DqF4Y",
      "1vpA3eR4RKd7tLjiJTEqjaqPwZkwduYhY",
      "1uQ_XmRKA_PAflj-gleSSh-MaCvoQNpp8"
    ],
    "featured": false
  },
  {
    "id": "metal-1CdkHunc",
    "name": "M 471",
    "categorySlug": "metal",
    "categoryName": "Línea Metal",
    "priceUsd": 52,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1RSEZxYFBRe0qNfIB_ORdQbIACFep6_P2",
      "1qKolcPvnjUTsdu-gEYli7Z5fJRRswY4G",
      "1EMXSS158ARKlBXEVTIe1tPhLrF1W8toM"
    ],
    "featured": false
  },
  {
    "id": "metal-1Qh6J1f9",
    "name": "M 472",
    "categorySlug": "metal",
    "categoryName": "Línea Metal",
    "priceUsd": 54,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1OZct2wkFN5qUSRgyfe6nDQZ_xqdSsIdY",
      "19ffK0OjHZJI_h_BPNYh9LpUJaLJcIGGi",
      "1gfHrDVLWGYwwtp5FFlMaZoy0H39SyNTr"
    ],
    "featured": false
  },
  {
    "id": "metal-1w67MeNy",
    "name": "M 474",
    "categorySlug": "metal",
    "categoryName": "Línea Metal",
    "priceUsd": 46,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1Zn_MC6ij4PV5B2QEShhbaOZtXBOQePQ-",
      "1JnsvNwf48x0yPs1Xc-0DwgQcsPvvfiBV",
      "1qWzq6O70GvwpfZnd2IwEnU-ypsngku3e"
    ],
    "featured": false
  },
  {
    "id": "metal-1eFVz4rG",
    "name": "M 475",
    "categorySlug": "metal",
    "categoryName": "Línea Metal",
    "priceUsd": 48,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1bs3sdHzDG33hGUlRSSkJ3FhXBox-pB33",
      "1qNvLqTQ9NsVfnJ8DP8u0c3nGiQPK7qin",
      "1qqmyMdKjy6b6Vza3MMK5aAW6BzDU1Mfb"
    ],
    "featured": false
  },
  {
    "id": "metal-14cHM-WH",
    "name": "M 476",
    "categorySlug": "metal",
    "categoryName": "Línea Metal",
    "priceUsd": 50,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "14Ys9xN6csWulJg3_UwTZilT3JLge37vn",
      "1I5XpHR7JAdJOfSJdcJq8V2tb_32N6mYF",
      "1135wGReqHyp5GivMt0MPWjUY_-UUU4WB"
    ],
    "featured": false
  },
  {
    "id": "metal-15vAaOiu",
    "name": "M 477",
    "categorySlug": "metal",
    "categoryName": "Línea Metal",
    "priceUsd": 52,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1GJCsH_SvemjFM5u4qCXlUqofAUKfyFVc",
      "1sAcK_PEDHBB1vkI54k1gmVsl0wd9Z1kr",
      "1OhuIVWZgiPTPPtZdeiA7m-UzoTokj-si"
    ],
    "featured": false
  },
  {
    "id": "metal-1PW0DfNJ",
    "name": "M 478",
    "categorySlug": "metal",
    "categoryName": "Línea Metal",
    "priceUsd": 54,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1UoC4LgFAnFqCzsR_W63r9j7140UapF8R",
      "1cQgYh-SS9e2D0RPnGjWcZJ7b1-dDjRzK",
      "18QtYk-Eex8rkoRzEqSDJvQilHROHVDxj"
    ],
    "featured": false
  },
  {
    "id": "metal-1HxDLMDE",
    "name": "M 479",
    "categorySlug": "metal",
    "categoryName": "Línea Metal",
    "priceUsd": 46,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1QiEWs4W33fPP5tIoRxwjSMat5tulgfzx",
      "1_XtY8x2HCQz6JOsme8z0fdunll9YpwfF",
      "1dI7z1tfTm_1uI6KvXvDMWUeJMk_esOeA"
    ],
    "featured": false
  },
  {
    "id": "metal-1LDRVkfX",
    "name": "Q M 41",
    "categorySlug": "metal",
    "categoryName": "Línea Metal",
    "priceUsd": 48,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1iBL6SfVFKfoA1PWwMlrDbWwhHppJQJeM",
      "1z1-shvZFuMsDV5aXfNbIKEyYN6pZHIln",
      "13YydYhY9W4rS6uQ3rf8I-ptpmjr61c7P",
      "1ogWn2LHwke-zv0grj-msH7htiRVm3plw"
    ],
    "featured": false
  },
  {
    "id": "omega-1aCd-FEA",
    "name": "OMEGA AQUA TERRA",
    "categorySlug": "omega",
    "categoryName": "Omega",
    "priceUsd": 140,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "5 ATM / Uso diario",
    "images": [
      "1zH_84N4P19J_mrrrwGnihGOPkv0L2Mem",
      "1zkmkci5oToeilkmDY_SlXcI7eVw5huyp",
      "1AhxnduaLyoDli7XpCQXWUHoYdHkZNwXc",
      "1c9pR3n3pyLfVfEQ9FctObI-4du4wgyEi",
      "1DQdBeyrKsJrxWJcsTIdiqnLjD7sCFpSq",
      "1OhOaZS4ZaVzH8RhekT5Jy-vxdr2rk0uV"
    ],
    "featured": false
  },
  {
    "id": "omega-1ODIxnGD",
    "name": "OMEGA CO AXIAL",
    "categorySlug": "omega",
    "categoryName": "Omega",
    "priceUsd": 142,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "5 ATM / Uso diario",
    "images": [
      "1l-LDDgWn6ag5tmyShnW8cmr9HtEVJBd9",
      "1fWVo7SPcwkDBIoxZPvaUh-8dXPamqMlV",
      "1Yz8peq2YT_s6t7PPZRxHJzW1ORavowHx",
      "1kmT05aJLtBIV102uUyjNZ071-b5M1Eq2",
      "1ngvqRxZz2aJJ7k08hrfsPZbCtDF7ePtf",
      "1S-b88efOS7QaA0C2Jd-KKDzSGuYIOG5o",
      "1KzD6Nyb9m3pKp5yWrR3DmL7SvSiGzvC9",
      "1UIrLqOHH50v2wTZbMJLGjuQQICEhmRR7"
    ],
    "featured": false
  },
  {
    "id": "omega-1ISanJKN",
    "name": "OMEGA DIVER",
    "categorySlug": "omega",
    "categoryName": "Omega",
    "priceUsd": 144,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "5 ATM / Uso diario",
    "images": [
      "1kYqshxxBeUvmWjxbjXawcDZEaKecjAe9",
      "1i0t6RZuVTKC21jx2q9xpfDESnOae8pZx",
      "1hiIBLjStdyPO8J-x7SLFXTBKW44o51M2",
      "1HWkDd9kK1K83Nw9qb9xDzXdHNx36nx7d",
      "1VjDD7iXUYq1ZozP8-IlUSkI7aHY9srU7",
      "1ssws3993FjmyZnwNSk5PgdZFDBwNKlVY",
      "1sgNpa6s88bxk-6YohM4pW-eHKJPJ1heT",
      "1RHhRiyGwpLASoFvVUGTHQxsXStvjc2xe"
    ],
    "featured": false
  },
  {
    "id": "omega-1l2vO4mg",
    "name": "OMEGA SEAMAST 20000",
    "categorySlug": "omega",
    "categoryName": "Omega",
    "priceUsd": 146,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "5 ATM / Uso diario",
    "images": [
      "1_-wm1g_1fj_yg6uPk5YklRUQJjt7mQy1",
      "1fUF_FZf2x3eD6sy-c36mvnbflCnMsLQy",
      "1TLnFWTuvDonPiSR86kNlNohz8VBuVkJ4",
      "1dgYxj7gaAbazQKyOPNadN6sJsIajXexp",
      "1BVfnxsX054e90XXP3JwG1cOlIAX2Lw2T",
      "1uh3rr9tzLI3KARaFmHMzEqvZfgMOofAh",
      "18SA3hfW6js6k6QlePYoQA53MJM8PGq4R",
      "1AkVph9irN3tWTKXwsTy6cc7C_PyaXsj9",
      "1zvXLiMSF575w4vQbjik1W_ip1Dx4UCid"
    ],
    "featured": false
  },
  {
    "id": "omega-1eK6bZrK",
    "name": "OMEGA SEAMASTER",
    "categorySlug": "omega",
    "categoryName": "Omega",
    "priceUsd": 148,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "5 ATM / Uso diario",
    "images": [
      "12N1QK6yIoCJNYCowVHSyaJO6PLngA-mf",
      "1a1_GfiHaZxQUulhMOVxhiEuHn_iad83x",
      "1CG7nVxcn3YPGOBYer_6OuJjmO1BAW6Z4",
      "1BIFizoRwKJUSRBAhQVl4d3Vwc_BlpXwI",
      "16utZxPPjYKksyjz-zsBHo0raxAcW95we",
      "1N3JL3aP3WkFmKV5_TaPLYX_eH28VJWLj",
      "1Gc7ec_JAjxVgIoB8F31L-tqGOJHDSHCA",
      "16gkNGq5bcmJBYIR5qYSYApqkqeUtWfXq",
      "1TjvBiOy_pUCdTW7cB9jO9CyT4VlqGwGL",
      "1hurf0SW0tzM4GIg2mkNLIHgQS6JsDsNV",
      "1oMdGuT2Y6oMm85ZpUidUWXw5OmGvV-Qt",
      "1zpO3Jvb1DtN50xvAdz0ajpMHwbQlyWVE",
      "1le4UG1nL5ntwoERdRK660H1hHagqVUzy"
    ],
    "featured": false
  },
  {
    "id": "omega-1LhFPBFk",
    "name": "OMEGA SEAMASTER AC",
    "categorySlug": "omega",
    "categoryName": "Omega",
    "priceUsd": 140,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "5 ATM / Uso diario",
    "images": [
      "1eZnR5C8WhmV7ogLyLEzqqoXyLM_MiBZR",
      "1QDEgWhZPN5rA52_tY35jn2wIMFVDKI2C",
      "1a5arStnTXdIKWtWGo7_PPt-jbrV_ENAQ",
      "1-dndKey7sLjpWrgts_3T2aMZTCArQ145",
      "1IGv_Y_eYxM68bFrzY7F-307ns60kLtLe",
      "13CAJ6Duf24e6t3MSOZk478SsoeTH0d_5",
      "1N-tdw58fZNdqmqAEl37_7ocYXXntZuQM",
      "1wq_mKclBKPUzwk06EGDORMXVQ-S47B-D",
      "1oUP4KKQMF5gs_sEqcFJo1mns24apBD3q",
      "1dCfXDF04UdKJONwxNa2ZtxnFqS7ZgEri"
    ],
    "featured": false
  },
  {
    "id": "omega-1Y2Wn3pb",
    "name": "OMEGA SEAMASTER PR",
    "categorySlug": "omega",
    "categoryName": "Omega",
    "priceUsd": 142,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "5 ATM / Uso diario",
    "images": [
      "1Uo2BrgxeLlLdF9gcqYHstA-zoUeYqCFp",
      "1i6bububdIXerKmfBfOdL8J0oi_UVSnfm",
      "17jOxdPuiAny3fghSzxGLXCEnPTxGlMkF",
      "1ZsFWXoXvVXodWKOmmM0N5wwIx2HHQwxZ",
      "1pmt6isPtoHIJLz9NAve-zo7gv_SrROf8",
      "1rHC4cMkvINgRyOSRWARWJO1MT64p-L6q",
      "1kMM1ZhZivwVNZQnZH1aYK-l1w8Px8gzz",
      "1pVPlaKofmg5Z69rsZG-JEKcK9tvWHViL",
      "1nQwpapERzXbvcIN_8sQ5MI237ZNJh6QL",
      "1OtCxva0zoxU-p2vin4k2ZcHRoa98gF-V"
    ],
    "featured": false
  },
  {
    "id": "poedagar-1bBtW37r",
    "name": "POEDAGAR DAYTONA N",
    "categorySlug": "poedagar",
    "categoryName": "Poedagar",
    "priceUsd": 58,
    "movement": "Cronógrafo Cuarzo",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1alSj2Gfkkt9eDQXqueib4aGPAhYrQRQK",
      "11vf0G624pR-91Ezyquo6lfB40_iBYTDU",
      "1k4ALIYdWUFcNnqqV9eVejAyywq5e5tUb",
      "1lTSUaoU9ADa1XB7e3D5_Xppsm4dr4Bep"
    ],
    "featured": false
  },
  {
    "id": "poedagar-1QrksCcF",
    "name": "POEDAGAR DAYTONA R",
    "categorySlug": "poedagar",
    "categoryName": "Poedagar",
    "priceUsd": 60,
    "movement": "Cronógrafo Cuarzo",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1UFiaqTutnGxbPHXJMGBiyYogg6yLn3eS",
      "1nxvQEjwWbO2Biyg4wv_flQGCHYPPSlMQ",
      "105Rdpwo8sXceIJLx-A6ILaCH0M4TNX3U",
      "1zPkX-cYVwLH9aTv8_2a8q4UmvvCWn2UC",
      "1uV7Ffe8wUeEvhOnLQ-EpIclGxIpiTCEF"
    ],
    "featured": false
  },
  {
    "id": "poedagar-1j5aigdg",
    "name": "POEDAGAR ESSENZA D",
    "categorySlug": "poedagar",
    "categoryName": "Poedagar",
    "priceUsd": 62,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1mfsTfHzW6LM7_N97-46Zsr3TthO4OjOd",
      "11Q4FgSKgVPx8E_qwyUEtMhfYqWhR2JQK",
      "1udPNxNAIbuPA8vUeV3sMlohfo7CuadZF",
      "1tNKfbU_hd2l5ENk3CvIgjX72b2UKrRxE"
    ],
    "featured": false
  },
  {
    "id": "poedagar-1VJZNlkr",
    "name": "POEDAGAR ESSENZA N",
    "categorySlug": "poedagar",
    "categoryName": "Poedagar",
    "priceUsd": 64,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "19qZ3BeFxn2MwZAwDOCF6KyRq0G-pttr5",
      "1GJky49CFqR8w2egxpH8XySwlsRdZU8ho",
      "1NklnZ08Q34F2gVlxR3Yn-AsTmCyiEcpy",
      "10RRMXh0OqVCEPR2lV2JLzWk4j0LBoIwq"
    ],
    "featured": false
  },
  {
    "id": "poedagar-1Btxy1G_",
    "name": "POEDAGAR MARANELLO B",
    "categorySlug": "poedagar",
    "categoryName": "Poedagar",
    "priceUsd": 66,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1FI7e0dLxaW7ze8Rzq0snIFCxjDxlo6wY",
      "1EENKpAUwh1Iai9450ayUwBZd6k1fEAQ2",
      "1PuplnozCjWIdOL8wpSJ-cnZEtLNXX_wA",
      "1gl3NnC5osTy1XYzy91hhBc5EjNcgjMG5"
    ],
    "featured": false
  },
  {
    "id": "poedagar-1vUgtxX8",
    "name": "POEDAGAR MARANELLO BV",
    "categorySlug": "poedagar",
    "categoryName": "Poedagar",
    "priceUsd": 58,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1p-ivBfDXM-3o5eQL-IR9cw-jx1aVKAZH",
      "1Y6w1h4ROTl9oIKop9whgMLCk-1ltLiLI",
      "1W3jBWYL0KZbTQS1GHbT3ZVwLROMMab2k",
      "1Ax-B1oX6faWOO7t-zR3rH-qLH48fvMPk"
    ],
    "featured": false
  },
  {
    "id": "poedagar-1fi1Szwr",
    "name": "POEDAGAR MARANELLO N",
    "categorySlug": "poedagar",
    "categoryName": "Poedagar",
    "priceUsd": 60,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1t6iLy2gsTxapUU4Ng92RhNau-gaV9Jl7",
      "1XmGh_nNpYiwmvuH5qA-9lXsoyLojwdln",
      "1H3BNzv0iYTDi0NI6UkyAtwPaB0Mj-8n2",
      "1PSHIpMhDhvTsi-s9KnISqMEj1r-E_sYC"
    ],
    "featured": false
  },
  {
    "id": "poedagar-1FOGw2lR",
    "name": "POEDAGAR SERENADE A",
    "categorySlug": "poedagar",
    "categoryName": "Poedagar",
    "priceUsd": 62,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1vnGFcIUq-ZwaJqVguZEnAzoct4mzLMjg",
      "1wwR0cp4AY5VizvZbWtRSInwGJT8PqJsU",
      "1J3UNjPn6BqHuZo2qmdW-VqReyD3KhJsy",
      "1iAoMlFa8583S799SZ2xzrIxxE-hNNXd8"
    ],
    "featured": false
  },
  {
    "id": "poedagar-1l14ZuXR",
    "name": "POEDAGAR SERENADE NN",
    "categorySlug": "poedagar",
    "categoryName": "Poedagar",
    "priceUsd": 64,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1TpGU_Nv8dmE_sYe-u86IDaLzAyC3Ayxx",
      "1r73nP7yltwXjvNO5cCIOjvT6vu33w70o",
      "18_pRLoVmAaA9yY3LhVJiJBMmJ7xcKZfy",
      "1hP_DmNvR1WGlMUjHLul9BBSQu1yTgJBO"
    ],
    "featured": false
  },
  {
    "id": "poedagar-1Fz-wUyz",
    "name": "POEDAGAR SERENADE RGB",
    "categorySlug": "poedagar",
    "categoryName": "Poedagar",
    "priceUsd": 66,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1pUYqT43ofMrcnTCYGFV5Ba6pDoHak4-I",
      "14mbTeJLM6rl-p4ZjYE-J71EAu5XxFPKN",
      "13IdzWFwM8QtjNGujzkwqD3_4Ms_Sfe1R",
      "1_MofOi-3MAJFltD125XZZItg4HVe9MEr"
    ],
    "featured": false
  },
  {
    "id": "poedagar-1mP3A43Q",
    "name": "POEDAGAR SERENADE RGN",
    "categorySlug": "poedagar",
    "categoryName": "Poedagar",
    "priceUsd": 58,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1mufe1mcBFsc46l7PEnLzpscCx_Vi3qhZ",
      "1lTA1DCLdGryjRa66vyk3WC7WYRN93aFX",
      "1KmLbXD-E8AOssPjpQPrT7Vdsy4lAjSl3",
      "1CykPj6lsARgXwEZXmeTBbjvfS5WgnpBb"
    ],
    "featured": false
  },
  {
    "id": "patek-philippe-1RjVtbXw",
    "name": "PATEK P",
    "categorySlug": "patek-philippe",
    "categoryName": "Patek Philippe",
    "priceUsd": 155,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "5 ATM / Uso diario",
    "images": [
      "1US3ona2MyUr4zJ3_4RrLsZUMDRHTqMnE",
      "1rR2kS9sJXfTPRmJMHxfC14Ng8UIwvWWx",
      "1kCw27o3UmDm-mzUY85en-8od5FGFud_P",
      "1K5nmXy2eKYpCk6_ffqS6MpeNb2ZSc2Hv",
      "1mhlCWwgTLOYw71AV5Losn2wPOd9BLNYV",
      "1IIMbJs_6tMueR58IhBNGhnI6ETeOPNy1"
    ],
    "featured": false
  },
  {
    "id": "patek-philippe-1PoaXoff",
    "name": "PATEK P AUTOMATIC",
    "categorySlug": "patek-philippe",
    "categoryName": "Patek Philippe",
    "priceUsd": 175,
    "movement": "Automático",
    "strap": "Acero inoxidable",
    "waterResistance": "5 ATM / Uso diario",
    "images": [
      "12KFyNBGYMUGb6WwAhFg9JGHZv_Ii_oEh",
      "1eukiXvglyMZva4QpvjBR5cfad9XJB97l",
      "1Knug6Z0nv-Oa20SyUVt_oE3RDRU5IFK-",
      "1WORETzgWfn-qEzB3KucuqRjxKr8BxEfw",
      "1689gwZezlnRGXtCgbuTCXGrfWMhlICrh",
      "1dVC5NhX6xEnE499cMAIBCXlH9AesSRUJ"
    ],
    "featured": false
  },
  {
    "id": "patek-philippe-1vlHWr3T",
    "name": "PATEK P AUTOMATIC CE B",
    "categorySlug": "patek-philippe",
    "categoryName": "Patek Philippe",
    "priceUsd": 175,
    "movement": "Automático",
    "strap": "Acero inoxidable",
    "waterResistance": "5 ATM / Uso diario",
    "images": [
      "1Cy27rjPCy5RS-WowP9GprPk2uKxQ0liQ",
      "1_kFHHgfKF2MjsI3AzOVsuve64GfBXgVn",
      "1jhBuiBltSjwKyNUml_ZF4o2JYX4ftJ5M",
      "1rzGED-6_q_l12gX81R2jiE7E70KHQyan",
      "1LdvQR4aFTiLS8-qYBlwAJey0VExVEaLd"
    ],
    "featured": false
  },
  {
    "id": "patek-philippe-1GX5l9aY",
    "name": "PATEK P AUTOMATIC CE N",
    "categorySlug": "patek-philippe",
    "categoryName": "Patek Philippe",
    "priceUsd": 175,
    "movement": "Automático",
    "strap": "Acero inoxidable",
    "waterResistance": "5 ATM / Uso diario",
    "images": [
      "1S_mrqHoNOgLF4Be91OBBHjSIET0ixR6V",
      "1MGEWbiRI_XjoyIg_tGbWhcSTIvmxh0EE",
      "1azJmnz73566DJYRABSvZT8sLdTgV-ch0",
      "1JIwUaWmR20UgJI1oftBUU8UI7xE4GH94",
      "1x3Z_eswEZv2ZVQZN2kJ4E3fsadQzM_QG"
    ],
    "featured": false
  },
  {
    "id": "patek-philippe-12p-0cvL",
    "name": "PATEK P AUTOMATIC CE PB",
    "categorySlug": "patek-philippe",
    "categoryName": "Patek Philippe",
    "priceUsd": 175,
    "movement": "Automático",
    "strap": "Acero inoxidable",
    "waterResistance": "5 ATM / Uso diario",
    "images": [
      "1l79cy0sQI0ftbfsnXjCeWfH3LXiI1d33",
      "155lDu9ZOeF1Va4TirsPH5JxJHQXE-G4a",
      "19PAEzDabORKNDWyVv7SzqBBPFGnU2a_v",
      "1o14DfSr-n86xqmmcliJfjtTjlyX6PSrK",
      "1EsF1h7B31N8q1jKP6RpZ7gSHP7atesGR"
    ],
    "featured": false
  },
  {
    "id": "patek-philippe-13eFQXJr",
    "name": "PATEK P AUTOMATIC CE PN",
    "categorySlug": "patek-philippe",
    "categoryName": "Patek Philippe",
    "priceUsd": 175,
    "movement": "Automático",
    "strap": "Acero inoxidable",
    "waterResistance": "5 ATM / Uso diario",
    "images": [
      "1xl8qDCGhZEr1V_2m_qqrnFqyUEhdQaok",
      "1a7AH9RtI3Br9fP0bl2GqXlK8PEanab3i",
      "1aDExwpASnJpBvU-zZE-Se-bFMhMJbzEA",
      "1lglCcEXN9IwRQX1vG0qfkuzDgRhGiKoS",
      "1cBInUw2q_GgTKybHgp9Eg_FlZZZwG6Ud"
    ],
    "featured": false
  },
  {
    "id": "patek-philippe-17q1aNaw",
    "name": "PATEK P AUTOMATIC CE V",
    "categorySlug": "patek-philippe",
    "categoryName": "Patek Philippe",
    "priceUsd": 175,
    "movement": "Automático",
    "strap": "Acero inoxidable",
    "waterResistance": "5 ATM / Uso diario",
    "images": [
      "1yKiAH6TymaKi5KutDGReZ0_iVXpxnj9y",
      "1BXQfb0v8Bq45OMdZ3ncUd30H9IZdxsPd",
      "1z6QjIZxr_d1QcOmuuhUBSpN_Sac8Efb_",
      "11-UW8WSK5f4hTMhfpBrAL_mjc78abSW5",
      "1GwIZD2h2HHyFe-7vF9k6g8ZjqthGjJG8"
    ],
    "featured": false
  },
  {
    "id": "patek-philippe-1_saTeJu",
    "name": "PATEK P AZUL",
    "categorySlug": "patek-philippe",
    "categoryName": "Patek Philippe",
    "priceUsd": 159,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "5 ATM / Uso diario",
    "images": [
      "1UgkKDgpqm3_mUFkGAYDoPXVpj9fP_VGf",
      "1UetMq3DcpPGVEhy8XN5mYpm3LV7AWTZx",
      "15oPxs6X8sZu-9w9ev7As-sN_iUfjxQfA",
      "1SmxOp8Oh4kxmFwfZhtszwwLx4tMK9_2x"
    ],
    "featured": false
  },
  {
    "id": "patek-philippe-15Zm0KmI",
    "name": "PATEK P NARANJA",
    "categorySlug": "patek-philippe",
    "categoryName": "Patek Philippe",
    "priceUsd": 161,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "5 ATM / Uso diario",
    "images": [
      "11wtYzF8TJn-RQjptPgSn8uFH9l-tXW-T",
      "1_XiiP29ULPKk9JIgBRF0YQlVY72o4STr",
      "1jbcfTKoNwqI7gprZ0OPBVhXqN3cyOU1R",
      "1Gdz38RE5gatdGJBS8KVLleaxWLZzNsAN"
    ],
    "featured": false
  },
  {
    "id": "patek-philippe-1CPa7j5j",
    "name": "PATEK P NEGRO",
    "categorySlug": "patek-philippe",
    "categoryName": "Patek Philippe",
    "priceUsd": 163,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "5 ATM / Uso diario",
    "images": [
      "1lIDkt3WeoRQIstwNs2HUaj45qe2oyJiu",
      "1wV4qT8kXE6b_DUm3WeqhwgiLYoE7Z1Ow",
      "1cgqYnwjKItfcn57cF-zMxRPSiLg4fiM7",
      "1gyANjC0Y7CbrUgx7WhiaI8-tMHW7Y6aL"
    ],
    "featured": false
  },
  {
    "id": "patek-philippe-1gt-EYSC",
    "name": "PATEK P PD",
    "categorySlug": "patek-philippe",
    "categoryName": "Patek Philippe",
    "priceUsd": 155,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "5 ATM / Uso diario",
    "images": [
      "1zdOKfDTHKyedQml01ROLVkQxWchCuMOs",
      "1ydM4plkBesyr-LuKBgD0Jb5XN2n1aW4p",
      "1oDnczp9aE9UOWrp7E-KWMO3CCoE1fwyI",
      "1aABBAaazcdobKg0zznP1oyycGw0EjzeG",
      "1UeLXzHgfVehVRYXkryOpLUIR-1temeio",
      "1QPGbsNQWhJbiPsvpRjdudQXt2gtakvEN",
      "1nJtpLM1-KQqbKaBFbYeA2e9VGwg7UXvt",
      "1gH-hJvPSmiAeFyJ5RhgrfTo0eRcwwS15",
      "1PAMrEOVTKyJw-r0Ke6puuQmSXctnLUVH"
    ],
    "featured": false
  },
  {
    "id": "rolex-1e9HaBLh",
    "name": "ROLEX DATE JUST",
    "categorySlug": "rolex",
    "categoryName": "Rolex",
    "priceUsd": 145,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "5 ATM / Uso diario",
    "images": [
      "1-gWg4lQ-GjapN87BibUtYRRL3gDoFQj1",
      "1lNMTFVNN7nNfON2HHVpBfeaj-SWrgBgH",
      "1jYoRFl-HWj0SscKZ0qsmRKePfwQsfpQK",
      "1Dbmmjr_2dXQbS9ZSxS5V1G68xam5STLP",
      "1JqY6ZJo00shIy_Atp0seSP8DfJgvzjhB",
      "1ao_bJC856H7mzlmYMNBnSnIylXEv0ScS",
      "1VDr7ZyWpbJ54R6XYDHQRZSsLw3nnlogD"
    ],
    "featured": false
  },
  {
    "id": "rolex-1JrMtHaH",
    "name": "ROLEX DATE JUST B",
    "categorySlug": "rolex",
    "categoryName": "Rolex",
    "priceUsd": 147,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "5 ATM / Uso diario",
    "images": [
      "1ijsQT7P5SSoPK34P_H2qkxI_hLP88oZa",
      "1ltJoFbKtyhEA2wq9pQEYM78f-TsCVQJE",
      "1LgsQ-QYT_BXcf0PY1At_MiVJesK4BEfM",
      "1EEnZzOcowit8VwHqJYWhNBT-EBPY4EIF",
      "1YBJZIvo3lYLtKPh55DnyMXNDodJ7IE3S"
    ],
    "featured": false
  },
  {
    "id": "rolex-1FXFjGQC",
    "name": "ROLEX DATE JUST N",
    "categorySlug": "rolex",
    "categoryName": "Rolex",
    "priceUsd": 149,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "5 ATM / Uso diario",
    "images": [
      "1YymdvZw5szfrZmBeL4Ne5bkITWw00OnN",
      "1VHcbIq2_O_Ar4XuJW0nHm7TZGJjIAMcy",
      "1WnGkydsfCuzz4H6ZSiFEGd6cueTL4pr2",
      "1u-bLK1MQC16N6Kge2VieWia3rBPpzU2Y"
    ],
    "featured": false
  },
  {
    "id": "rolex-1HI0edj3",
    "name": "ROLEX DATE JUST V",
    "categorySlug": "rolex",
    "categoryName": "Rolex",
    "priceUsd": 151,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "5 ATM / Uso diario",
    "images": [
      "1FUeICe4nOX1xYQv_lFQt06oL-by2nxot",
      "1VV0g8BVc_Oioyn6j2VjnaOJaV_L7lXE0",
      "1shS6xQw3QV5Bk1gFifADi_TPVSgwdwAS",
      "1As8ph98cpw9DlcA0FIXC-tg5GhxG7G6D",
      "1jBwaU-qz2h9V2HmASQFd-sUbSIlrvuUs"
    ],
    "featured": false
  },
  {
    "id": "rolex-1UheL3FV",
    "name": "ROLEX DWELLER BL",
    "categorySlug": "rolex",
    "categoryName": "Rolex",
    "priceUsd": 153,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "5 ATM / Uso diario",
    "images": [
      "16zPTPOhVsXYH35js_gpsjJWpBwOoqF4B",
      "1en7u3aehmp8SmBshMxV8vQfNs-Wr_1RP",
      "1onhw6j3VzTUBpZra9U0wu_nEFHfR-INe",
      "1OJY2GTTJdz8eKOG-QwXpmq8YHl2FmRC0"
    ],
    "featured": false
  },
  {
    "id": "rolex-1UKJmKot",
    "name": "ROLEX DWELLER NE",
    "categorySlug": "rolex",
    "categoryName": "Rolex",
    "priceUsd": 145,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "5 ATM / Uso diario",
    "images": [
      "1m-FiHptVI4p6wy33fDNZVkSXj1qPcgOy",
      "1QDO3oFeiCd1fq5Xnc4DSgFgA1vFxqPd4",
      "1SYZk0fPrDZzK6HJXU8MUltG-KI3Na3co",
      "1-vEcR1xc-GRw9emohlD0-FaOCXS5Yml5"
    ],
    "featured": false
  },
  {
    "id": "rolex-1W12hxLb",
    "name": "ROLEX METEORIT",
    "categorySlug": "rolex",
    "categoryName": "Rolex",
    "priceUsd": 155,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "5 ATM / Uso diario",
    "images": [
      "1vmpPGAyvpYH9Au6oDhm_P8BM1T_vy8Ig",
      "1Gj-nqe6TgJOxUa8EpEVW5umbxTOajnpY",
      "1xtxyvLvqJIHkanfhnk21OWmwRaxMiSfS",
      "1xLncFgbVmiIz9fy9MehIs94QIc6kKAfh",
      "12aEppa-9cTmBVo2wCPxi8joar9Rrx2-7",
      "1qybKDf1kXLweQYj_bZO7mFU0VRle2O77"
    ],
    "featured": false
  },
  {
    "id": "rolex-1T9sawHG",
    "name": "ROLEX OYSTER DATEJUST",
    "categorySlug": "rolex",
    "categoryName": "Rolex",
    "priceUsd": 149,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "5 ATM / Uso diario",
    "images": [
      "1n7grIHj3Q_DIeoCE-jNAKoR6EGdkinzT",
      "1oi9ewNrpgeXQLdGFe-SLTIDpAbr7ZoYp",
      "1uAjVq5lfIb9W85aGbhbhxWzPU_uqv0Gr",
      "1w-QsAFa9N01bEX56BozhdZd47y5Y2Yoc",
      "1crw_y42CvkxFdkcUBo-wylG8dg5XvFik",
      "14FmbRTrGShFcUGmlPyA4FjgBS158TZyx",
      "10uj6ylErgSePMIWib4_oIzTj0OqCJ2F_",
      "1-O3js9HevMrgEv7BNLF4eMxj4Av2N6_E"
    ],
    "featured": false
  },
  {
    "id": "sanda-1PUMG9DJ",
    "name": "SANDA 898 B",
    "categorySlug": "sanda",
    "categoryName": "Sanda",
    "priceUsd": 45,
    "movement": "Digital / Ana-Digi",
    "strap": "Silicona / Resina",
    "waterResistance": "5 ATM / Uso diario",
    "images": [
      "1j3zfB0sEBk99jSCdaH0zkqKiU2Xqd7Xl",
      "1bOdl0HlwpQG89RTgqxhOTIyNBUVKQUjl",
      "1IPVHw0hkJIKWOo1VICdXWj76FlmicCm9",
      "1KE5Xvvx9OZ0jd4pr8NAS0Sqw-y0mbVLf",
      "1n30RPZtYDHHnQWdNTArgUQ5O3SzG1aY_",
      "1k3zImxl_iUKQNVfnwG_OLmqpAfdrtajY",
      "1zPzQ-MRlQKy6It9hYIWS6pEr400hRfEp"
    ],
    "featured": false
  },
  {
    "id": "sanda-1eEystvd",
    "name": "SANDA 898 N",
    "categorySlug": "sanda",
    "categoryName": "Sanda",
    "priceUsd": 47,
    "movement": "Digital / Ana-Digi",
    "strap": "Silicona / Resina",
    "waterResistance": "5 ATM / Uso diario",
    "images": [
      "1-Rf-C7paWqSXL7VtDnK_J-4IHrC2MIKN",
      "1Kj4WvGpgkl1SgQG5xDpF4pwB9s2_CTvv",
      "1tTA_AxV1UU-lkocWiGEIm2WTub1XdrpL",
      "16ABTPPovPWA7veAxKt9KgbgAuRvn4ZXp",
      "1W0f_dGPutlkO9vw8tVBLunF7kxqgB2rR"
    ],
    "featured": false
  },
  {
    "id": "sanda-1Vubb6j9",
    "name": "SANDA 898 V",
    "categorySlug": "sanda",
    "categoryName": "Sanda",
    "priceUsd": 49,
    "movement": "Digital / Ana-Digi",
    "strap": "Silicona / Resina",
    "waterResistance": "5 ATM / Uso diario",
    "images": [
      "1HQ3eDgxAdRbM2UNvcey3ST3bG2YqJC45",
      "1-7BKRXoacKiMKjwzd1gE4BoeC04qD0vt",
      "14Wi5H7U7JbtimK-XY71AvUd1zws93t4N",
      "1aXZfT6lifOye6zbRa1SbMB7T9X8qsCyM",
      "1uZnJPpUtOyTmen8lcdf4f9QCoMgT3c2K",
      "11FCoeIUxV4bzlHJeIfh1PztskKQ5VlbH"
    ],
    "featured": false
  },
  {
    "id": "sanda-1indM6a_",
    "name": "SANDA 2145 C",
    "categorySlug": "sanda",
    "categoryName": "Sanda",
    "priceUsd": 51,
    "movement": "Digital / Ana-Digi",
    "strap": "Silicona / Resina",
    "waterResistance": "5 ATM / Uso diario",
    "images": [
      "1MQ_bABWEm-U7ZMVaViCZZ9yDuJqLFiQk",
      "1IOSvth4ElbdkTXdGtoJ7ss0uMZR_46Kw",
      "1E1AfzrTn2ldkQ3Koi2x79UZSCvX9EhTN",
      "1fZ1TTQXotDYXgCiPof00GgSMT2GAQ7QJ",
      "1xl6bDaVk92_wJUYITzMLN-LPaAgmJczJ",
      "1S0Wbm9DhOxxtpOjoaEuTiy9i_Sir1Ssw",
      "1f8Qx3oEO8qCYKp82jllzdpS74WeM62iC",
      "1amwian1XgIDfhz2MQpFSTg5Qnu2ZAFN4",
      "1Py8gJ6ptFOxbQBbgqmLNJ7cFo6VjR3wD",
      "1Xsd3X1zReem1U7vRxUa38rG2jjrqv8Ow",
      "1DzdCjsV60PK1VmkAMhsReAlOkQLw-k5T",
      "1X0TkcVPk719zHLUAtJNhQm-i1ZXEm4Hr",
      "1vPJKZ7S2hAbhYB__cI9t6yg7029QMUFn",
      "1NDLsZCcLlrHr7acfvDjH1ZMs2Ut1YQFd",
      "1quCc9R9lyIwF7Q69-BNrC8pT4HsguO9l"
    ],
    "featured": false
  },
  {
    "id": "smartwatches-1MB_cqSk",
    "name": "HAINOTEKO",
    "categorySlug": "smartwatches",
    "categoryName": "Smartwatches",
    "priceUsd": 75,
    "movement": "Smartwatch Táctil",
    "strap": "Silicona / Resina",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1uozvUaiAu4t3d7DqhgNT8vNK2o9quQEP",
      "1LPfTCpLWW-vzlLukV_donXL55rYeEuTa",
      "1flA0M5UumfBeoUn8ciY9aD193YHUmIgn",
      "1osM7HywAz8EzvQIpOgj3JP6OiptgITU-",
      "1gkT9AuL2lXuBnBzLoSQRBrcAQEFZ60er",
      "1qKd1_JoUJSypLHlOUwRSTJ6BCMFe67qq",
      "1z4hTS6lrgwkI_ALPhr6SPfeL2t0mzG0D",
      "1yGYJj1s3eVmPSjKiK95ZrV5aozavnZy_",
      "10P5lUVOWuwZhHQYWhxZER0VADcjelHYB"
    ],
    "featured": false
  },
  {
    "id": "smartwatches-1ieeXI6t",
    "name": "NETMAK ELITE",
    "categorySlug": "smartwatches",
    "categoryName": "Smartwatches",
    "priceUsd": 77,
    "movement": "Smartwatch Táctil",
    "strap": "Silicona / Resina",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1mOZB-KSB4FbuVdxfipsvwM9GXwSlIlXk",
      "1M82QviW9Dp-ODbdxvaZusjoiy7UGcq7d",
      "1_XSdQW3JTLvTy6fnwjKKc1gRJ4BbYeS1",
      "1zTRM2OnHOUAqp9LNNFKOMmiAClbFIArn",
      "1fnmikN4njrjoWnOn97AFACYzUh_vdPoL",
      "1Hi8TCNi7t4VtU254V7rhkyF6N8TPotEY"
    ],
    "featured": false
  },
  {
    "id": "smartwatches-1KQcYZWQ",
    "name": "SPORTS WATCH",
    "categorySlug": "smartwatches",
    "categoryName": "Smartwatches",
    "priceUsd": 79,
    "movement": "Smartwatch Táctil",
    "strap": "Silicona / Resina",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1JmKnLRkjclkaycNR-jtiQ1r0V88jwAoZ",
      "1RHODD91TK_olFTjiZezw78g5gPrMtnxw",
      "1XYcc9aNX2rL41HqWXzm2pptr_X2yMVFp",
      "1gkQtrGXjTOtB-h5L_xJpMXXX-9DDaRgl",
      "1rrv6fHMjWZ6ofds-4xqXxZ3yWZdFrJWJ",
      "1tukEP7lFlKN2udEIhYDbhhtZbKoyppYS"
    ],
    "featured": false
  },
  {
    "id": "sucess-1YkP8-1f",
    "name": "SUCESS WAY L233",
    "categorySlug": "sucess",
    "categoryName": "Sucess",
    "priceUsd": 54,
    "movement": "Cuarzo de Precisión",
    "strap": "Aleación metálica",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1eioLQ6jHx7PKsPObvbHLVgLkuorZjLCE",
      "1OFSnOg8Ilsh3YmtlZ6udl92_3AGDj5lV",
      "1I00bKKb1Ql3FjKug5hbmOxHcq1Txwl0M",
      "1IuA0cpn12rTqAhEVpsazR7qL1Sx74ftC",
      "1ZJTw5VYTv4xF0hMSDTPJjSYZyPn1Euni",
      "1XddsQfpKbjo5XdxaDB7a8Rg8YaHpRD2d",
      "1ocE-u2i5jKeQrkCrXSoa4snDzJenwBy7"
    ],
    "featured": false
  },
  {
    "id": "sucess-1ZOwFlJ_",
    "name": "SUCESS WAY L300",
    "categorySlug": "sucess",
    "categoryName": "Sucess",
    "priceUsd": 56,
    "movement": "Cuarzo de Precisión",
    "strap": "Aleación metálica",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1qgUKDmW1ap5ugcLoT85hsOKq-S9V7rwz",
      "1GVxVttWKiSXIl-6V-7S1FX7IVxUR6TAC",
      "1lGBNVsV4U6hxlPHCoZHJfruC1c_AUYpk",
      "1dh6lZkImp43TpWCVi2NmbVJMxOrX3w8s",
      "1S0-WA5T-6Qn4JqKySyoDcJG6wySAtAta",
      "1AphFVpHQ9kpFGX3oMPOKydf8ZHFw-FVu",
      "1Er9kwDl4kodzyVo6w8Dr1seZupntcMcV"
    ],
    "featured": false
  },
  {
    "id": "tag-heuer-1GQXSLzC",
    "name": "TAG H CHRONOGRAPH",
    "categorySlug": "tag-heuer",
    "categoryName": "TAG Heuer",
    "priceUsd": 145,
    "movement": "Cronógrafo Cuarzo",
    "strap": "Aleación metálica",
    "waterResistance": "5 ATM / Uso diario",
    "images": [
      "1rsa8h_N9M0bgX9_QEV33LVQsFLL4aNnu",
      "1-xaqwN0IgXOlybvP1Jpznw4LqD2XKNEr",
      "1uWErGzbmhkifF0Gq0DfoEXUnET2qjBP3",
      "1dEzZ6jTn0sbmxdzEPDcergDvJhLnYFUp",
      "1sDqDIFiO04_5nwIT_2fgrBBG4gRTSaXR",
      "11PkfzScLG6FD4IdN-57-sMK85cV-Q4LC"
    ],
    "featured": false
  },
  {
    "id": "tag-heuer-1x0Tcgn2",
    "name": "TAG H CHRONOGRAPH ARG",
    "categorySlug": "tag-heuer",
    "categoryName": "TAG Heuer",
    "priceUsd": 145,
    "movement": "Cronógrafo Cuarzo",
    "strap": "Aleación metálica",
    "waterResistance": "5 ATM / Uso diario",
    "images": [
      "1S44JRsCR6thj0NRmyRve6xLReZ9mgPd1",
      "1rBAyK1IH_CeHg9TtRtmG_cRU3nZXl4QD",
      "1H2AzXqiDSjsvKJTTZsxojLi_QLnWjmp9",
      "1gYNG7CGfhv0I-1HVVpq3d7l3w7Bu9f_i",
      "1UXpwBbRMac-D-S2qz6hR4P4S-Vc0_U2B",
      "15-orE6TL2qwOHJ1gAPN2ySlW7wUZ4TwM"
    ],
    "featured": false
  },
  {
    "id": "tag-heuer-1gRXoqyL",
    "name": "TAG H F1",
    "categorySlug": "tag-heuer",
    "categoryName": "TAG Heuer",
    "priceUsd": 139,
    "movement": "Cuarzo de Precisión",
    "strap": "Aleación metálica",
    "waterResistance": "5 ATM / Uso diario",
    "images": [
      "1hWJ9onI7CjR4H_rVXGmMiZaHinOjwPDj",
      "1Qg_94MfbwDLe4qNt9qOgnM3MPuCaGG_7",
      "17w16cKIFWlIOMhmBwCN9YeKhHwTBA5Dy",
      "19qUXwPQM6mxv93nISfy3FUXFFHQDQK35",
      "194Y4cSs-lnpWXc8qKvsP106PkDmdPTyQ",
      "1bhBzyp5eH1L3FSeQ9D3-yj1uhwxtQoGt",
      "1pP2Iv9UDYZ68UnPoMfykC733IFnkoNSp",
      "1THuz3n3LD4tUQDqo4TC7xF3u-QhAyEEv",
      "1kDRnaxvlYTbQwcbteiM4gaMgv_rAT9Km"
    ],
    "featured": false
  },
  {
    "id": "tag-heuer-1jVv2yqP",
    "name": "TAG HEUER C",
    "categorySlug": "tag-heuer",
    "categoryName": "TAG Heuer",
    "priceUsd": 141,
    "movement": "Cuarzo de Precisión",
    "strap": "Aleación metálica",
    "waterResistance": "5 ATM / Uso diario",
    "images": [
      "1xzXhWme0nxETNh1Frt8JfrMdACv0yzsz",
      "1_u-VqaCrupgSqfkckulGHRKzWrBN-XFg",
      "1Sc2Pug0SEO3lDyYXJ-tSB-UgjCVbXZql",
      "1kEXJcOIvtrePJrZwULtSdARJi056qA5Q",
      "1LRvMusAenUbZf2MYV5M0qE_X1gh4QILv",
      "17Fu1nE24hKMhHQWu807wHvyoy21oE81u",
      "1DhofNpsOwlcPWiAzI27xzYeiAxRq0k2w",
      "1cFB7X0loOXDzy89g-79yTf9qQjK4x9QD",
      "19PGjAFg4VwbIoeGl_-PetxjilLf0Ti_h",
      "12nM7dOdvJrmE2J_leocpcoh_vO17C1ss"
    ],
    "featured": false
  },
  {
    "id": "tissot-1jnJlLB0",
    "name": "T 1853 B",
    "categorySlug": "tissot",
    "categoryName": "Tissot",
    "priceUsd": 95,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1wTWpFPLfBLdnPNvTgQ786ObqPnlVwEnv",
      "1GE7DjQ_V3z47Dk_NMOE-y-hAGchulUtR",
      "1lOuKj1qoU-1_IJ-9qcBcBAxRAQ0XXs1j"
    ],
    "featured": false
  },
  {
    "id": "tissot-12Vax6dM",
    "name": "T 1853 G",
    "categorySlug": "tissot",
    "categoryName": "Tissot",
    "priceUsd": 97,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1GAeclXIwuZWAv8O8p5pba_J9HcHPwqhj",
      "1OA3EUm85db1n2fZjFxFgF3Xy5m36ZApN",
      "1kAd05p-XFl8kyBx-hEZd5aTHPrPTitwJ"
    ],
    "featured": false
  },
  {
    "id": "tissot-11l7JFQt",
    "name": "T 1853 N",
    "categorySlug": "tissot",
    "categoryName": "Tissot",
    "priceUsd": 99,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1RgTKF7i2VKRX0lcJxE_0krkeN_yeQ0nF",
      "1YAKxHstcRxOZBd_VPd4TGYXHCKI4Kun5",
      "1nUSOTsl3CPdh9PSJS_fv_Hj8RLBlNhjk"
    ],
    "featured": false
  },
  {
    "id": "tissot-1LOnOrPE",
    "name": "T CLÁSICO",
    "categorySlug": "tissot",
    "categoryName": "Tissot",
    "priceUsd": 101,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1xT0P5cxlfKxlXb1OXxsBED-LPayOUFZ4",
      "1jBd_J6PPGWqzVJWz72ek0xP6SQSyOIAd",
      "1m0AW52aVIb5qDDxPcVbyvmdKMm21r6jo",
      "1SlRXhTCYkd6y0qXRIdjt5lQWfmIhtUKL",
      "1BhLTdx7dvjWwFLlPO5NOn1-6XsekWCAw",
      "1hPEEqHaZFWkaBsiFV4a3dUqoXAMAiRwg",
      "1vgUqXrDZJpBsdvTMK0yf3dTrTIhy0NVD",
      "1tNVbw61QuSloOUv7idm6dDEy0w5akkeJ",
      "1WAfxZjUzrYpeoX6SQS9VxnvGXPZBU0Wk",
      "1LRZeBxoc1alKsdcXgvyt1N-qM1c-gVeD",
      "18lOLl1OnAuBLIrmNz-H_JKYGBF9AZ1ZJ",
      "16qmF-rwoLJ3E33MwuurmgcJb4cWxjn6l",
      "1Tot2CxhzyOiAPWM8B7-7ICjPV4fMZizT",
      "1BqctkM5CZUJow8-OrbpAapvJ_CvMbBzy",
      "1Df7rHxKfCiQ9qzyjm-aUrjuT7bOKTAxi",
      "1Oo4AgHdqBq4jbV0AIknRwii196hW2KXC"
    ],
    "featured": false
  },
  {
    "id": "tissot-108Ssp1J",
    "name": "T PRX",
    "categorySlug": "tissot",
    "categoryName": "Tissot",
    "priceUsd": 105,
    "movement": "Cuarzo de Precisión",
    "strap": "Acero inoxidable",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1AKAGBgPxixWZNDL1bYGWug8PMFe6v9Z8",
      "1tgWLLPas3MT2RKQQR7yRniZNcCfktx1o",
      "1w-0c4tp-yamjL_tdTVXZWk9Y5qQSuiYu",
      "1d88vXVWS6gAywF2u81MacImlInoJ9YV5",
      "1Dt2Ar4nIZIVHcsZi5nKtpIvAsgcmiF6d",
      "12prMzJGuyb7pdMRgDHbrWX6KZzL9l3ev",
      "1VikcR2xjabqNipP9fW5it2jK1c1sBJVD",
      "1k2WD3wkUznP7Qcs7JVCyfl5cD02bBpWi",
      "1L4MiTnKreQRdCgWGHfVySrlo_fTcIchj",
      "1RFUtjp1RaUSWmAl1lo83R0ltKrSFukZE",
      "1rBC7AbXMZgFj-XTBuyzdaFGtImh0Zzrt",
      "1hzccIChtMjX7v8pqvtxLstGpI9k2S9JL"
    ],
    "featured": false
  },
  {
    "id": "tomi-1D5v97XK",
    "name": "TOMI 208",
    "categorySlug": "tomi",
    "categoryName": "Tomi",
    "priceUsd": 48,
    "movement": "Cuarzo de Precisión",
    "strap": "Aleación metálica",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1aIsr2uenLEM6eM1RgZsadF5YUm4fehBi",
      "1Wm3emZkxuIaOQNICa3FURFo4pkYPNHxM",
      "1UmLcNiZU0_rRISsxu7dxvbAV7ep5Uffz",
      "1OOFgNQVsjeRO_IF4_zb3dSGSmRHTqGAS",
      "13s6iqBXMmqfFx08xv3XlF9dTksiX-LGt",
      "1LQpTWe_aoCgG8K9x-mz-lz7_09oOyZdL",
      "1Ng-wroc0OS1_I2sK3tcPKyvFhfO4zGmv"
    ],
    "featured": false
  },
  {
    "id": "tomi-1KsK9ocV",
    "name": "TOMI 214",
    "categorySlug": "tomi",
    "categoryName": "Tomi",
    "priceUsd": 50,
    "movement": "Cuarzo de Precisión",
    "strap": "Aleación metálica",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1mHwwXUfZgjWuD-0AXcDBoZNjmxT4HSi2",
      "1QIn00X8_-_ofbGQQAx7Wn4tF4PqKtgZT",
      "1_XEjDbpszodQxuBAv_EYjqCD_wSQi64g",
      "1OGrbwo1wexPQfUx8chC2APCUuZs6NP_b",
      "1RA2ezPjbRMba3zlQAGYWpOEqo5DaStHE",
      "14y9cEkNVuLPIPj6AYekGFQN8JGnzssze"
    ],
    "featured": false
  },
  {
    "id": "tomi-1IJpoNJm",
    "name": "TOMI 238",
    "categorySlug": "tomi",
    "categoryName": "Tomi",
    "priceUsd": 52,
    "movement": "Cuarzo de Precisión",
    "strap": "Aleación metálica",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1_P37tI0DvzBVfOe0JHfiXcEDU1fPiv2Q",
      "1gYpcbP-vCEDfADzRDQVb2T9d2p6lS5ZK",
      "1ypAcUyFam75mWHSmyuQMipUguR7huG-e",
      "1OuIGTXIws-A0u7FjwJAMrZ1NK8E2cxqO",
      "1Xkp91jyHcqyW5l1MJ-woMi5-qsYatPXR",
      "1j0xMqiQeou-9hjdFY1lKItrdn5QSCFR7",
      "1hwy5sZj86oUfF2AtgcAPFcebqWI3233g",
      "11PDx4ao1LRDrPY22yPpzokYNenlP65Nd"
    ],
    "featured": false
  },
  {
    "id": "tomi-18RInDDH",
    "name": "TOMI 500",
    "categorySlug": "tomi",
    "categoryName": "Tomi",
    "priceUsd": 54,
    "movement": "Cuarzo de Precisión",
    "strap": "Aleación metálica",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1HG7GzbGG8Vt3IbGUxP4rPGW7rUrrbSEe",
      "1VHco6Fisg2Q5ubk1sJxrq0u_UBNUh9I5",
      "10uotYnKWxfIDYPLXuCMi8ayueAqH-es_",
      "1au0OZdhCfRrDlvaP_ghfo_AI0Z0kl5hq",
      "15f1u24fY4_59u7-GErOhLJACtJ3KVRtq"
    ],
    "featured": false
  },
  {
    "id": "tomi-1_IlYbpU",
    "name": "TOMI 501",
    "categorySlug": "tomi",
    "categoryName": "Tomi",
    "priceUsd": 56,
    "movement": "Cuarzo de Precisión",
    "strap": "Aleación metálica",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1P36coESfGCpU-u-XZk_p7_YhbYnrEi3k",
      "1Tm3bRAVR3vQBV7FHMuHQ48NfeDY-r_WA",
      "1tn2_7mwD4KGfCsBI_p-04SOTIM4eCuaa"
    ],
    "featured": false
  },
  {
    "id": "tomi-1lX_HBg7",
    "name": "TOMI 603 A",
    "categorySlug": "tomi",
    "categoryName": "Tomi",
    "priceUsd": 48,
    "movement": "Cuarzo de Precisión",
    "strap": "Aleación metálica",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1JvLX8HJEN1DHUG5jr7gNQ67JPdhV9YLr",
      "1B4M_z97Zj8RvxU8sHAdDbXs6bmwocHh8",
      "1tLWcVZrW2-qFlHf9mL9G4uC3hi44tLUN",
      "1onP3nHJ8bt51kvPseyoQbq8lX0rhVB_1",
      "1TJgmsOhkROnJ4pE3Cyfx1S2kSrPCCBof"
    ],
    "featured": false
  },
  {
    "id": "tomi-1f7bNV7o",
    "name": "TOMI 603 N",
    "categorySlug": "tomi",
    "categoryName": "Tomi",
    "priceUsd": 50,
    "movement": "Cuarzo de Precisión",
    "strap": "Aleación metálica",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1usVPUvEWNKA1Rz8jrX_t7nhcUpm2l1K9",
      "1N6GfhIuYx5uvnc5K0NjbZ2jfmTZFmAnz",
      "1rfZ8BpXahC-dbKz1_SBAt5YgKes68_Rq",
      "1iLEshcpYetf9kT9oW1k_y2N2L4R9Ocep",
      "15GmOmee0WuJZrwL-zfHdOjaCu2RAXzmI"
    ],
    "featured": false
  },
  {
    "id": "tomi-1dFcWCw-",
    "name": "TOMI 701 CE A",
    "categorySlug": "tomi",
    "categoryName": "Tomi",
    "priceUsd": 52,
    "movement": "Cuarzo de Precisión",
    "strap": "Aleación metálica",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1rw2vRp5wP6jbE3VU4jCHMwkchancGXgZ",
      "1ahmJaIi_vD3sZQ9OPsIX2xIcGkGdkUWI",
      "1o7Fau_iicYfQe1ME7t46hKAhOA5aj75o"
    ],
    "featured": false
  },
  {
    "id": "tomi-1haONfUc",
    "name": "TOMI 701 CE M",
    "categorySlug": "tomi",
    "categoryName": "Tomi",
    "priceUsd": 54,
    "movement": "Cuarzo de Precisión",
    "strap": "Aleación metálica",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1pPjyX1CXnOfGx09Pxr_VGUWoR3cjUtGl",
      "1PO-s-SdqwZ7kKzn0rM4GxoF_UHkuiPBK",
      "1RysU__-OLTEWuAAmwrixJravPJ4FUosE"
    ],
    "featured": false
  },
  {
    "id": "tomi-1JL236az",
    "name": "TOMI 701 CE N",
    "categorySlug": "tomi",
    "categoryName": "Tomi",
    "priceUsd": 56,
    "movement": "Cuarzo de Precisión",
    "strap": "Aleación metálica",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1v_r-C9Ln5os_8lkMibJJEQIFElujXAV7",
      "1Fzpi5m4bEdRF6PqGtwZofsTmiAkaucnX",
      "1T-kw4JHcvrTsg74Wz62G0SV4jn7tzyi9"
    ],
    "featured": false
  },
  {
    "id": "tomi-1yAO5Pb9",
    "name": "TOMI 701 CE V",
    "categorySlug": "tomi",
    "categoryName": "Tomi",
    "priceUsd": 48,
    "movement": "Cuarzo de Precisión",
    "strap": "Aleación metálica",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1Dt8gJWN3JSQ1NnylrcBjz2qU2J6NESkU",
      "1xtCy23B5ZmKOX89mfbnchiEBf_Z1cA2W",
      "1JkEHDU0fZuGAMFFQGWMfgny7Exdb-TzJ"
    ],
    "featured": false
  },
  {
    "id": "tomi-1sjUPUNi",
    "name": "TOMI 898",
    "categorySlug": "tomi",
    "categoryName": "Tomi",
    "priceUsd": 50,
    "movement": "Cuarzo de Precisión",
    "strap": "Aleación metálica",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1lMbhWB30hn4fS4hbglpkEf5uhRdO5U6Y",
      "1AMIDnbo5-c7plyiK6_ZAGxCFLE3_CRXU",
      "17rgtkDoQ_cHVnYD89LRVESXRxnfUnMBo",
      "1da-zrDHJREPKZNDU4tl8FIpArpxT5CaC",
      "1ETGlpCirQwKbXUiUxBVlDdBSolCIbiG6"
    ],
    "featured": false
  },
  {
    "id": "tomi-1A-sXWN-",
    "name": "TOMI CUERO 988",
    "categorySlug": "tomi",
    "categoryName": "Tomi",
    "priceUsd": 52,
    "movement": "Cuarzo de Precisión",
    "strap": "Cuero ecológico",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1VXULCjgO4Bo5JOV8BSRoPHENVOk4ARVN",
      "1C74oTjZ_uDVjzXJD0C6scAGGqeJ20Pja",
      "1M9Gw9pZQNpn0QzVR6IAb9V8cfcLpJYKZ",
      "1YuNgG5DeJkJ9fAwxfPqPszryU0TNFyTt"
    ],
    "featured": false
  },
  {
    "id": "tomi-1jMvmNxF",
    "name": "TOMI FACE GEAR (MOD 02)",
    "categorySlug": "tomi",
    "categoryName": "Tomi",
    "priceUsd": 54,
    "movement": "Cuarzo de Precisión",
    "strap": "Aleación metálica",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1bzX8q_6AY8XPSw9qNRacRzovf6qq9wV1",
      "18h-2SIE5GiuGHfJT7sinqFHwWS-C6fM8",
      "1f68gBNjvAzx5Cw-WrolKtcTDBwXLhHTH",
      "1QjfQ-8mR_G4wnVYXuPruRByXQX-KkVq4"
    ],
    "featured": false
  },
  {
    "id": "tomi-13O7kDvl",
    "name": "TOMI FACE GEAR (MOD 03)",
    "categorySlug": "tomi",
    "categoryName": "Tomi",
    "priceUsd": 56,
    "movement": "Cuarzo de Precisión",
    "strap": "Aleación metálica",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1o-PfxXtp9hS7r-ESnpZosYXiZ7UyOVwm",
      "10D77GAAXqsf0QljFfybOW1pLrHHWL5zY",
      "1x3ZxUlpBV0rgArl4xIe8Tv6wda6Ywbdf",
      "1RbMo6xUfrgn26l3rkqf1o2nVFuDQnCoK"
    ],
    "featured": false
  },
  {
    "id": "tomi-1yo7M7SB",
    "name": "TOMI FACE GEAR (MOD 04)",
    "categorySlug": "tomi",
    "categoryName": "Tomi",
    "priceUsd": 48,
    "movement": "Cuarzo de Precisión",
    "strap": "Aleación metálica",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "13KelYcDOftpamfOCQlxxA9EnFhr6uIAl",
      "1qkIHtd8CO2vGYvT95-zHZ7QV9-GhbYlg",
      "1avezwDRF6mGNuw0xbgsj02QS6bg_nVgS",
      "1YA1U1vlAex-fmplNdt_q0eacWCf4JA3E"
    ],
    "featured": false
  },
  {
    "id": "tomi-1SGL_VTT",
    "name": "TOMI FACE GEAR B",
    "categorySlug": "tomi",
    "categoryName": "Tomi",
    "priceUsd": 50,
    "movement": "Cuarzo de Precisión",
    "strap": "Aleación metálica",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1_KvoSo0UzB04Hz2Ou5YhtX-T_jFd4Aum",
      "1ut59ltiIvwpRJRwMa71tp4hCGMb1ecQn",
      "1ffW7R9Ojps3c0HvHy9hdbEGgf8zhAptK"
    ],
    "featured": false
  },
  {
    "id": "tomi-1-aKJms4",
    "name": "TOMI FACE GEAR G",
    "categorySlug": "tomi",
    "categoryName": "Tomi",
    "priceUsd": 52,
    "movement": "Cuarzo de Precisión",
    "strap": "Aleación metálica",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1RsEVLyb_ggn6lWFOMtxYYn5HLhoQBlVd",
      "19J9BUnKHrlpDXIoRpOgLZsoc8fs3Wd8I",
      "10GUVJd_6RSY-Y6eWUCfBPgFXjSpatQfi"
    ],
    "featured": false
  },
  {
    "id": "tomi-1vGJeBh4",
    "name": "TOMI FACE GEAR RGB",
    "categorySlug": "tomi",
    "categoryName": "Tomi",
    "priceUsd": 54,
    "movement": "Cuarzo de Precisión",
    "strap": "Aleación metálica",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1yVSsoY5VqYb5xG5bsfQDJ4xU-JeydWgV",
      "1_7AYygzFHa5ZfU4Y3nSWgXm1uLg_yFEd",
      "1Y5ycaB5zL_kuKQkVjblk3cEOnkyulSpZ"
    ],
    "featured": false
  },
  {
    "id": "tomi-1Sd-e-Uj",
    "name": "TOMI FACE GEAR RGN",
    "categorySlug": "tomi",
    "categoryName": "Tomi",
    "priceUsd": 56,
    "movement": "Cuarzo de Precisión",
    "strap": "Aleación metálica",
    "waterResistance": "3 ATM (salpicaduras)",
    "images": [
      "1BHWBzqcWGt9qtkmI274yIBwL9SMmAKM5",
      "15MeZWuJwVEh9BdFVd7DT-8RZ1M38_aYS",
      "1wmMWkETYmYp4cZmEECC4CpyhOUACyBTC"
    ],
    "featured": false
  }
];
