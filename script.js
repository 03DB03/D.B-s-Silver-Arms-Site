const weapons = [
  {
    id: 1,
    name: "Glock 17 Gen5",
    category: "Weapon",
    price: 600,
    image: "glock17.webp",
    description: "Polymer-framed 9mm service pistol renowned for reliability and simplicity.",
    specs: {
      type: "Pistol",
      caliber: "9x19mm",
      operation: "Semi-auto, short recoil",
      muzzleVelocity: "375 m/s"
    }
  },
  {
    id: 2,
    name: "SIG Sauer P320",
    category: "Weapon",
    price: 650,
    image: "sig_p320.webp",
    description: "Modular striker-fired pistol adopted by multiple military and law enforcement agencies.",
    specs: {
      type: "Pistol",
      caliber: "9x19mm",
      operation: "Semi-auto, short recoil",
      muzzleVelocity: "360 m/s"
    }
  },
  {
    id: 3,
    name: "Beretta 92FS",
    category: "Weapon",
    price: 700,
    image: "beretta_92fs.webp",
    description: "Iconic Italian 9mm pistol with open-slide design and decades of service use.",
    specs: {
      type: "Pistol",
      caliber: "9x19mm",
      operation: "Semi-auto, short recoil",
      muzzleVelocity: "380 m/s"
    }
  },
  {
    id: 4,
    name: "Colt M1911",
    category: "Weapon",
    price: 900,
    image: "colt_m1911.webp",
    description: "Classic .45 ACP single-action pistol with over a century of proven performance.",
    specs: {
      type: "Pistol",
      caliber: ".45 ACP",
      operation: "Semi-auto, short recoil",
      muzzleVelocity: "260 m/s"
    }
  },
  {
    id: 5,
    name: "Desert Eagle Mark XIX",
    category: "Weapon",
    price: 1600,
    image: "desert_eagle.webp",
    description: "Large-frame gas-operated pistol, famous for its power and distinctive design.",
    specs: {
      type: "Pistol",
      caliber: ".50 AE",
      operation: "Semi-auto, gas-operated",
      muzzleVelocity: "470 m/s"
    }
  },
  {
    id: 6,
    name: "Heckler & Koch MP5",
    category: "Weapon",
    price: 2700,
    image: "hk_mp5.webp",
    description: "Roller-delayed 9mm SMG trusted by special operations worldwide.",
    specs: {
      type: "SMG",
      caliber: "9x19mm",
      operation: "Roller-delayed blowback",
      muzzleVelocity: "400 m/s"
    }
  },
  {
    id: 7,
    name: "FN P90",
    category: "Weapon",
    price: 1700,
    image: "fn_p90.webp",
    description: "Compact bullpup SMG with 50-round top-mounted magazine and 5.7x28mm chambering.",
    specs: {
      type: "SMG",
      caliber: "5.7x28mm",
      operation: "Straight blowback",
      muzzleVelocity: "715 m/s"
    }
  },
  {
    id: 8,
    name: "Heckler & Koch UMP45",
    category: "Weapon",
    price: 1500,
    image: "hk_ump45.webp",
    description: "Lightweight .45 ACP SMG with simple blowback operation and modern ergonomics.",
    specs: {
      type: "SMG",
      caliber: ".45 ACP",
      operation: "Straight blowback",
      muzzleVelocity: "285 m/s"
    }
  },
  {
    id: 9,
    name: "Uzi",
    category: "Weapon",
    price: 1200,
    image: "uzi.webp",
    description: "Legendary Israeli open-bolt SMG known for robustness and compact form factor.",
    specs: {
      type: "SMG",
      caliber: "9x19mm",
      operation: "Open-bolt blowback",
      muzzleVelocity: "400 m/s"
    }
  },
  {
    id: 10,
    name: "Heckler & Koch MP7",
    category: "Weapon",
    price: 2000,
    image: "hk_mp7.webp",
    description: "Personal defense weapon firing 4.6x30mm, combining compact size with armor penetration.",
    specs: {
      type: "SMG",
      caliber: "4.6x30mm",
      operation: "Short-stroke gas piston",
      muzzleVelocity: "720 m/s"
    }
  },
  {
    id: 11,
    name: "AKM (AK-47 variant)",
    category: "Weapon",
    price: 900,
    image: "akm.webp", // <-- update to correct filename
    description: "Stamped-receiver 7.62x39mm rifle renowned for reliability in harsh conditions.",
    specs: {
      type: "Assault Rifle",
      caliber: "7.62x39mm",
      operation: "Gas-operated, rotating bolt",
      muzzleVelocity: "715 m/s"
    }
  },
  {
    id: 12,
    name: "M4A1",
    category: "Weapon",
    price: 1400,
    image: "m4a1.webp",
    description: "Carbine-length 5.56 NATO service rifle with modularity and widespread adoption.",
    specs: {
      type: "Assault Rifle",
      caliber: "5.56x45mm NATO",
      operation: "Direct impingement, rotating bolt",
      muzzleVelocity: "910 m/s"
    }
  },
  {
    id: 13,
    name: "Heckler & Koch HK416",
    category: "Weapon",
    price: 3200,
    image: "hk416.webp",
    description: "Short-stroke piston 5.56 rifle noted for reliability and used by elite units.",
    specs: {
      type: "Assault Rifle",
      caliber: "5.56x45mm NATO",
      operation: "Short-stroke gas piston",
      muzzleVelocity: "900 m/s"
    }
  },
  {
    id: 14,
    name: "FN SCAR-L",
    category: "Weapon",
    price: 3000,
    image: "fn_scar_l.webp",
    description: "Modular 5.56 NATO rifle with adjustable gas system and robust construction.",
    specs: {
      type: "Assault Rifle",
      caliber: "5.56x45mm NATO",
      operation: "Short-stroke gas piston",
      muzzleVelocity: "880 m/s"
    }
  },
  {
    id: 15,
    name: "Steyr AUG A3",
    category: "Weapon",
    price: 2000,
    image: "steyr_aug_a3.webp",
    description: "Bullpup 5.56 rifle with integrated optics options and distinctive ergonomics.",
    specs: {
      type: "Assault Rifle",
      caliber: "5.56x45mm NATO",
      operation: "Short-stroke gas piston",
      muzzleVelocity: "930 m/s"
    }
  },
  {
    id: 16,
    name: "Remington 700",
    category: "Weapon",
    price: 800,
    image: "remington_700.webp",
    description: "Bolt-action precision rifle platform favored by hunters and marksmen.",
    specs: {
      type: "Sniper Rifle",
      caliber: "7.62x51mm NATO / .308 Win",
      operation: "Bolt-action",
      muzzleVelocity: "820 m/s"
    }
  },
  {
    id: 17,
    name: "Barrett M82A1",
    category: "Weapon",
    price: 8000,
    image: "barrett_m82a1.webp",
    description: ".50 BMG semi-automatic anti-materiel rifle with long-range capability.",
    specs: {
      type: "Sniper Rifle",
      caliber: ".50 BMG",
      operation: "Short-recoil, semi-auto",
      muzzleVelocity: "853 m/s"
    }
  },
  {
    id: 18,
    name: "Benelli M4",
    category: "Weapon",
    price: 1800,
    image: "benelli_m4.webp",
    description: "12-gauge gas-operated combat shotgun adopted by militaries worldwide.",
    specs: {
      type: "Shotgun",
      caliber: "12 gauge",
      operation: "Gas-operated (ARGO), semi-auto",
      muzzleVelocity: "450 m/s"
    }
  },
  {
    id: 19,
    name: "FN M249 SAW",
    category: "Weapon",
    price: 7000,
    image: "fn_m249_saw.webp",
    description: "5.56 NATO belt-fed light machine gun providing sustained suppressive fire.",
    specs: {
      type: "LMG",
      caliber: "5.56x45mm NATO",
      operation: "Gas-operated, open bolt",
      muzzleVelocity: "915 m/s"
    }
  },
  {
    id: 20,
    name: "PKM",
    category: "Weapon",
    price: 6000,
    image: "pkm.webp",
    description: "General-purpose machine gun chambered in 7.62x54mmR, renowned for reliability.",
    specs: {
      type: "LMG",
      caliber: "7.62x54mmR",
      operation: "Gas-operated, open bolt",
      muzzleVelocity: "825 m/s"
    }
  },
  {
    id: 21,
    name: "SIG Sauer P226",
    category: "Weapon",
    price: 900,
    image: "sig_p226.webp",
    description: "All-metal 9mm duty pistol known for accuracy and durability.",
    specs: {
      type: "Pistol",
      caliber: "9x19mm",
      operation: "Semi-auto, short recoil",
      muzzleVelocity: "380 m/s"
    }
  },
  {
    id: 22,
    name: "CZ 75 B",
    category: "Weapon",
    price: 700,
    image: "cz_75b.webp",
    description: "Steel-frame 9mm pistol with excellent ergonomics and slide-in-frame design.",
    specs: {
      type: "Pistol",
      caliber: "9x19mm",
      operation: "Semi-auto, short recoil",
      muzzleVelocity: "370 m/s"
    }
  },
  {
    id: 23,
    name: "Walther PPQ M2",
    category: "Weapon",
    price: 650,
    image: "walther_ppq_m2.webp",
    description: "Striker-fired 9mm pistol known for its excellent trigger and ergonomics.",
    specs: {
      type: "Pistol",
      caliber: "9x19mm",
      operation: "Semi-auto, short recoil",
      muzzleVelocity: "360 m/s"
    }
  },
  {
    id: 24,
    name: "Browning Hi-Power",
    category: "Weapon",
    price: 800,
    image: "browning_hi_power.webp",
    description: "Classic 9mm single-action pistol with double-stack magazine and long service history.",
    specs: {
      type: "Pistol",
      caliber: "9x19mm",
      operation: "Semi-auto, short recoil",
      muzzleVelocity: "360 m/s"
    }
  },
  {
    id: 25,
    name: "Smith & Wesson M&P9",
    category: "Weapon",
    price: 600,
    image: "sw_mp9.webp",
    description: "Modern striker-fired 9mm pistol popular with law enforcement and civilian shooters.",
    specs: {
      type: "Pistol",
      caliber: "9x19mm",
      operation: "Semi-auto, short recoil",
      muzzleVelocity: "370 m/s"
    }
  },
  {
    id: 26,
    name: "Heckler & Koch USP",
    category: "Weapon",
    price: 900,
    image: "hk_usp.webp",
    description: "Versatile service pistol available in multiple calibers; renowned for reliability.",
    specs: {
      type: "Pistol",
      caliber: "9x19mm",
      operation: "Semi-auto, short recoil",
      muzzleVelocity: "360 m/s"
    }
  },
  {
    id: 27,
    name: "Thompson M1A1",
    category: "Weapon",
    price: 2200,
    image: "thompson_m1a1.webp",
    description: "Historic .45 ACP submachine gun known as the 'Tommy Gun'.",
    specs: {
      type: "SMG",
      caliber: ".45 ACP",
      operation: "Blowback, open bolt",
      muzzleVelocity: "285 m/s"
    }
  },
  {
    id: 28,
    name: "MP40",
    category: "Weapon",
    price: 2500,
    image: "mp40.webp",
    description: "German WWII-era 9mm submachine gun with folding stock and simple blowback operation.",
    specs: {
      type: "SMG",
      caliber: "9x19mm",
      operation: "Blowback, open bolt",
      muzzleVelocity: "380 m/s"
    }
  },
  {
    id: 29,
    name: "CZ Scorpion EVO 3",
    category: "Weapon",
    price: 1300,
    image: "cz_scorpion_evo3.webp",
    description: "Modern lightweight 9mm SMG/PDW with excellent ergonomics and modularity.",
    specs: {
      type: "SMG",
      caliber: "9x19mm",
      operation: "Straight blowback",
      muzzleVelocity: "370 m/s"
    }
  },
  {
    id: 30,
    name: "PPSh-41",
    category: "Weapon",
    price: 1800,
    image: "ppsh41.webp",
    description: "Iconic Soviet submachine gun chambered in 7.62x25mm with high rate of fire.",
    specs: {
      type: "SMG",
      caliber: "7.62x25mm Tokarev",
      operation: "Blowback, open bolt",
      muzzleVelocity: "500 m/s"
    }
  },
  {
    id: 31,
    name: "AK-74M",
    category: "Weapon",
    price: 1200,
    image: "ak74m.webp",
    description: "Modernized 5.45x39mm Kalashnikov rifle with polymer furniture and side-folding stock.",
    specs: {
      type: "Assault Rifle",
      caliber: "5.45x39mm",
      operation: "Gas-operated, rotating bolt",
      muzzleVelocity: "900 m/s"
    }
  },
  {
    id: 32,
    name: "SIG SG 550",
    category: "Weapon",
    price: 2800,
    image: "sig_sg550.webp",
    description: "Swiss 5.56 NATO rifle famed for precision and high-quality manufacturing.",
    specs: {
      type: "Assault Rifle",
      caliber: "5.56x45mm NATO",
      operation: "Gas-operated, rotating bolt",
      muzzleVelocity: "905 m/s"
    }
  },
  {
    id: 33,
    name: "IWI Tavor TAR-21",
    category: "Weapon",
    price: 2400,
    image: "tavor_tar21.webp",
    description: "Bullpup 5.56 rifle with compact length and combat-proven reliability.",
    specs: {
      type: "Assault Rifle",
      caliber: "5.56x45mm NATO",
      operation: "Short-stroke gas piston",
      muzzleVelocity: "910 m/s"
    }
  },
  {
    id: 34,
    name: "FAMAS F1",
    category: "Weapon",
    price: 2600,
    image: "famas_f1.webp",
    description: "French bullpup 5.56 rifle with lever-delayed blowback operation.",
    specs: {
      type: "Assault Rifle",
      caliber: "5.56x45mm NATO",
      operation: "Lever-delayed blowback",
      muzzleVelocity: "960 m/s"
    }
  },
  {
    id: 35,
    name: "Accuracy International AWM",
    category: "Weapon",
    price: 5500,
    image: "ai_awm.webp",
    description: ".338 Lapua Magnum precision rifle known for record-setting long-range performance.",
    specs: {
      type: "Sniper Rifle",
      caliber: ".338 Lapua Magnum",
      operation: "Bolt-action",
      muzzleVelocity: "915 m/s"
    }
  },
  {
    id: 36,
    name: "SVD Dragunov",
    category: "Weapon",
    price: 2500,
    image: "svd_dragunov.webp",
    description: "Semi-automatic designated marksman rifle chambered in 7.62x54mmR.",
    specs: {
      type: "Sniper Rifle",
      caliber: "7.62x54mmR",
      operation: "Gas-operated, rotating bolt",
      muzzleVelocity: "830 m/s"
    }
  },
  {
    id: 37,
    name: "Mossberg 500",
    category: "Weapon",
    price: 450,
    image: "mossberg_500.webp",
    description: "Pump-action 12-gauge shotgun widely used for defense, hunting, and law enforcement.",
    specs: {
      type: "Shotgun",
      caliber: "12 gauge",
      operation: "Pump-action",
      muzzleVelocity: "400 m/s"
    }
  },
  {
    id: 38,
    name: "Remington 870",
    category: "Weapon",
    price: 500,
    image: "remington_870.webp",
    description: "Iconic pump-action 12-gauge shotgun with robust steel receiver.",
    specs: {
      type: "Shotgun",
      caliber: "12 gauge",
      operation: "Pump-action",
      muzzleVelocity: "400 m/s"
    }
  },
  {
    id: 39,
    name: "FN MAG (M240)",
    category: "Weapon",
    price: 8500,
    image: "fn_mag_m240.webp",
    description: "7.62 NATO general-purpose machine gun providing reliable sustained fire.",
    specs: {
      type: "LMG",
      caliber: "7.62x51mm NATO",
      operation: "Gas-operated, open bolt",
      muzzleVelocity: "840 m/s"
    }
  },
  {
    id: 40,
    name: "Heckler & Koch G36",
    category: "Weapon",
    price: 2800,
    image: "hk_g36.webp",
    description: "5.56 NATO rifle with polymer construction and reliable short-stroke gas system.",
    specs: {
      type: "Assault Rifle",
      caliber: "5.56x45mm NATO",
      operation: "Short-stroke gas piston",
      muzzleVelocity: "920 m/s"
    }
  },
  {
    id: 41,
    name: "AK-12",
    category: "Weapon",
    price: 1500,
    image: "ak12.webp",
    description: "Modern Russian 5.45x39mm service rifle with improved ergonomics and rails.",
    specs: {
      type: "Assault Rifle",
      caliber: "5.45x39mm",
      operation: "Gas-operated, rotating bolt",
      muzzleVelocity: "900 m/s"
    }
  },
  {
    id: 42,
    name: "AS Val",
    category: "Weapon",
    price: 2500,
    image: "as_val.webp",
    description: "Integrally suppressed Russian rifle chambered in 9x39mm for special operations.",
    specs: {
      type: "Assault Rifle",
      caliber: "9x39mm",
      operation: "Gas-operated, rotating bolt",
      muzzleVelocity: "290 m/s"
    }
  },
  {
    id: 43,
    name: "RPK-74",
    category: "Weapon",
    price: 2300,
    image: "rpk74.webp",
    description: "Russian light machine gun variant of the AK-74 with extended barrel and bipod.",
    specs: {
      type: "LMG",
      caliber: "5.45x39mm",
      operation: "Gas-operated, rotating bolt",
      muzzleVelocity: "960 m/s"
    }
  },
  {
    id: 44,
    name: "Mosin–Nagant M91/30",
    category: "Weapon",
    price: 700,
    image: "mosin_m9130.webp",
    description: "Iconic Russian/Soviet bolt-action rifle chambered in 7.62x54mmR.",
    specs: {
      type: "Sniper Rifle",
      caliber: "7.62x54mmR",
      operation: "Bolt-action",
      muzzleVelocity: "865 m/s"
    }
  },
  {
    id: 45,
    name: "PP-19-01 Vityaz",
    category: "Weapon",
    price: 1200,
    image: "pp19_vityaz.webp",
    description: "Russian 9mm submachine gun based on the AK platform, widely used by police.",
    specs: {
      type: "SMG",
      caliber: "9x19mm",
      operation: "Straight blowback",
      muzzleVelocity: "380 m/s"
    }
  },
  {
    id: 46,
    name: "M16A2",
    category: "Weapon",
    price: 1800,
    image: "m16a2.webp",
    description: "U.S. 5.56 NATO service rifle with burst fire and improved sights.",
    specs: {
      type: "Assault Rifle",
      caliber: "5.56x45mm NATO",
      operation: "Direct impingement, rotating bolt",
      muzzleVelocity: "930 m/s"
    }
  },
  {
    id: 47,
    name: "AR-15",
    category: "Weapon",
    price: 1200,
    image: "ar15.webp",
    description: "Popular U.S. semi-automatic rifle platform known for modularity.",
    specs: {
      type: "Assault Rifle",
      caliber: "5.56x45mm NATO",
      operation: "Direct impingement, rotating bolt",
      muzzleVelocity: "910 m/s"
    }
  },
  {
    id: 48,
    name: "M1 Garand",
    category: "Weapon",
    price: 1600,
    image: "m1_garand.webp",
    description: "Historic U.S. semi-automatic rifle chambered in .30-06 Springfield.",
    specs: {
      type: "Assault Rifle",
      caliber: ".30-06 Springfield",
      operation: "Gas-operated, rotating bolt",
      muzzleVelocity: "865 m/s"
    }
  },
  {
    id: 49,
    name: "Colt Python",
    category: "Weapon",
    price: 1400,
    image: "colt_python.webp",
    description: "Premium American double-action revolver chambered in .357 Magnum.",
    specs: {
      type: "Pistol",
      caliber: ".357 Magnum",
      operation: "Double-action revolver",
      muzzleVelocity: "440 m/s"
    }
  },
  {
    id: 50,
    name: "Winchester Model 70",
    category: "Weapon",
    price: 900,
    image: "winchester_model_70.webp",
    description: "Classic American bolt-action hunting rifle, the 'Rifleman's Rifle'.",
    specs: {
      type: "Sniper Rifle",
      caliber: ".30-06 Springfield",
      operation: "Bolt-action",
      muzzleVelocity: "850 m/s"
    }
  },
  {
    id: 51,
    name: "M60E4",
    category: "Weapon",
    price: 7500,
    image: "m60e4.webp",
    description: "American general-purpose machine gun chambered in 7.62 NATO, known for its distinctive profile.",
    specs: {
      type: "LMG",
      caliber: "7.62x51mm NATO",
      operation: "Gas-operated, open bolt",
      muzzleVelocity: "850 m/s"
    }
  },
  {
    id: 52,
    name: "Negev NG7",
    category: "Weapon",
    price: 6800,
    image: "negev_ng7.webp",
    description: "Israeli light machine gun chambered in 7.62 NATO with quick-change barrel system.",
    specs: {
      type: "LMG",
      caliber: "7.62x51mm NATO",
      operation: "Gas-operated, open bolt",
      muzzleVelocity: "820 m/s"
    }
  },
  {
    id: 53,
    name: "Ultimax 100",
    category: "Weapon",
    price: 5200,
    image: "ultimax_100.webp",
    description: "Singaporean light machine gun with unique balanced recoil system for improved accuracy.",
    specs: {
      type: "LMG",
      caliber: "5.56x45mm NATO",
      operation: "Gas-operated, open bolt",
      muzzleVelocity: "970 m/s"
    }
  },
  {
    id: 54,
    name: "Saiga-12",
    category: "Weapon",
    price: 1200,
    image: "saiga_12.webp",
    description: "Russian semi-automatic 12-gauge shotgun based on AK platform with detachable magazines.",
    specs: {
      type: "Shotgun",
      caliber: "12 gauge",
      operation: "Gas-operated, semi-auto",
      muzzleVelocity: "430 m/s"
    }
  },
  {
    id: 55,
    name: "AA-12",
    category: "Weapon",
    price: 4500,
    image: "aa_12.webp",
    description: "American automatic 12-gauge shotgun with drum magazine and recoil reduction system.",
    specs: {
      type: "Shotgun",
      caliber: "12 gauge",
      operation: "Gas-operated, full-auto",
      muzzleVelocity: "350 m/s"
    }
  },
  {
    id: 56,
    name: "SPAS-12",
    category: "Weapon",
    price: 2800,
    image: "spas_12.webp",
    description: "Italian dual-mode 12-gauge shotgun with pump-action and semi-automatic operation.",
    specs: {
      type: "Shotgun",
      caliber: "12 gauge",
      operation: "Pump-action/Semi-auto",
      muzzleVelocity: "400 m/s"
    }
  },
  {
    id: 57,
    name: "KSG-25",
    category: "Weapon",
    price: 950,
    image: "ksg_25.webp",
    description: "American bullpup pump-action 12-gauge shotgun with dual magazine tubes.",
    specs: {
      type: "Shotgun",
      caliber: "12 gauge",
      operation: "Pump-action",
      muzzleVelocity: "380 m/s"
    }
  },
  {
    id: 58,
    name: "Kel-Tec KSG",
    category: "Weapon",
    price: 850,
    image: "kel_tec_ksg.webp",
    description: "Compact bullpup pump-action 12-gauge shotgun with dual magazine tubes for tactical use.",
    specs: {
      type: "Shotgun",
      caliber: "12 gauge",
      operation: "Pump-action",
      muzzleVelocity: "380 m/s"
    }
  },
  {
    id: 59,
    name: "CheyTac M200 Intervention",
    category: "Weapon",
    price: 12000,
    image: "cheytac_m200.webp",
    description: "Ultra-long-range precision rifle chambered in .408 CheyTac, designed for extreme distance engagements.",
    specs: {
      type: "Sniper Rifle",
      caliber: ".408 CheyTac",
      operation: "Bolt-action",
      muzzleVelocity: "1067 m/s"
    }
  },
  {
    id: 60,
    name: "McMillan TAC-50",
    category: "Weapon",
    price: 9500,
    image: "mcmillan_tac50.webp",
    description: "Canadian .50 BMG precision rifle known for setting world records in long-range shooting.",
    specs: {
      type: "Sniper Rifle",
      caliber: ".50 BMG",
      operation: "Bolt-action",
      muzzleVelocity: "850 m/s"
    }
  }
];

let cart = [];
let selectedCategory = 'All';
let selectedWeapon = null;

const loadingScreen = document.getElementById('loading-screen');
const app = document.getElementById('app');
const cartBtn = document.getElementById('cart-btn');
const signupBtn = document.getElementById('signup-btn');
const cartCount = document.getElementById('cart-count');
const categoryFilter = document.getElementById('category-filter');
const weaponCount = document.getElementById('weapon-count');
const weaponsGrid = document.getElementById('weapons-grid');
const weaponModal = document.getElementById('weapon-modal');
const signupModal = document.getElementById('signup-modal');
const cartOverlay = document.getElementById('cart-overlay');
const cartItems = document.getElementById('cart-items');
const cartFooter = document.getElementById('cart-footer');
const cartTotal = document.getElementById('cart-total');
const emptyCart = document.getElementById('empty-cart');

const weaponTypes = [
  "All",
  "Pistol",
  "SMG",
  "Shotgun",
  "Sniper Rifle",
  "Assault Rifle",
  "LMG"
];

function formatPrice(price) {
  return `€${price.toLocaleString()}`;
}

function getFilteredWeapons() {
  if (selectedCategory === 'All') {
    return weapons;
  }
  return weapons.filter(weapon => weapon.specs.type === selectedCategory);
}

function updateWeaponCount() {
  const filtered = getFilteredWeapons();
  weaponCount.textContent = `SHOWING ${filtered.length} WEAPONS`;
}

function updateCartCount() {
  cartCount.textContent = cart.length;
}

function getTotalPrice() {
  return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

function addToCart(weapon) {
  const existing = cart.find(item => item.id === weapon.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...weapon, quantity: 1 });
  }
  updateCartCount();
  renderCart();
}

function removeFromCart(weaponId) {
  cart = cart.filter(item => item.id !== weaponId);
  updateCartCount();
  renderCart();
}

function handlePurchase() {
  alert('Thank you for your purchase!\nYour order has been received.');
  cart = [];
  updateCartCount();
  renderCart();
  cartOverlay.style.display = 'none';
}

function showPurchaseModal() {
  // Check if user is signed up
  if (!window.isUserSignedUp) {
    alert('Please sign up before making a purchase!');
    signupModal.style.display = 'flex';
    return;
  }
  
  let modal = document.getElementById('purchase-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'purchase-modal';
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100vw';
    modal.style.height = '100vh';
    modal.style.background = 'rgba(0,0,0,0.7)';
    modal.style.display = 'flex';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modal.style.zIndex = '99999';
    modal.innerHTML = `
      <div style="
        background: #0a0a0a;
        color: #fff;
        border-radius: 12px;
        padding: 36px 28px 28px 28px;
        min-width:320px;
        max-width:90vw;
        box-shadow: 0 8px 32px #000, 0 0 0 3px #fcee09;
        border: 2px solid #fcee09;
        position:relative;
        font-family: 'Rajdhani', monospace;
      ">
        <button id="purchase-modal-close" style="
          position:absolute;
          top:10px;
          right:14px;
          background:none;
          border:none;
          color:#e94560;
          font-size:28px;
          cursor:pointer;
          font-weight:bold;
          transition: color 0.2s;
        ">&times;</button>
        <h2 style="color:#fcee09; margin-top:0; text-align:center; font-family:'Orbitron', monospace; letter-spacing:2px;">Complete Your Purchase</h2>
        <form id="purchase-form">
          <label style="display:block; margin-top:18px; font-weight:600; color:#00f5ff;">
            Name:
            <input type="text" required id="purchase-name" style="
              width:100%;
              padding:10px;
              margin-top:6px;
              border-radius:4px;
              border:1.5px solid #fcee09;
              background:#181818;
              color:#fff;
              font-size:1rem;
              font-family:'Rajdhani', monospace;
              outline:none;
              transition: border-color 0.2s;
            ">
          </label>
          <label style="display:block; margin-top:18px; font-weight:600; color:#00f5ff;">
            Account Number:
            <input type="text" required id="purchase-account" style="
              width:100%;
              padding:10px;
              margin-top:6px;
              border-radius:4px;
              border:1.5px solid #fcee09;
              background:#181818;
              color:#fff;
              font-size:1rem;
              font-family:'Rajdhani', monospace;
              outline:none;
              transition: border-color 0.2s;
            ">
          </label>
          <label style="display:block; margin-top:18px; font-weight:600; color:#00f5ff;">
            Card Number:
            <input type="text" required id="purchase-card" style="
              width:100%;
              padding:10px;
              margin-top:6px;
              border-radius:4px;
              border:1.5px solid #fcee09;
              background:#181818;
              color:#fff;
              font-size:1rem;
              font-family:'Rajdhani', monospace;
              outline:none;
              transition: border-color 0.2s;
            ">
          </label>
          <button type="submit" style="
            background: linear-gradient(45deg, #fcee09, #00f5ff);
            color:#0a0a0a;
            border:none;
            padding:12px 0;
            border-radius:4px;
            margin-top:28px;
            cursor:pointer;
            width:100%;
            font-weight:700;
            font-size:1.1rem;
            letter-spacing:1px;
            text-transform:uppercase;
            font-family:'Orbitron', monospace;
            box-shadow: 0 0 10px #fcee09;
            transition: background 0.2s, color 0.2s;
          ">Confirm Purchase</button>
        </form>
      </div>
    `;
    document.body.appendChild(modal);
  } else {
    modal.style.display = 'flex';
  }

  document.getElementById('purchase-modal-close').onclick = function() {
    modal.style.display = 'none';
  };

  document.getElementById('purchase-form').onsubmit = function(e) {
    e.preventDefault();
    modal.querySelector('form').innerHTML = `
      <div style="padding:24px 0; text-align:center;">
        <h2 style="color:#39ff14; font-family:'Orbitron', monospace;">Purchase Successful!</h2>
        <p style="color:#fff; margin-top:18px;">Your weapon(s) will be shipped soon.</p>
        <button id="purchase-modal-ok" style="
          background: linear-gradient(45deg, #fcee09, #00f5ff);
          color:#0a0a0a;
          border:none;
          padding:10px 24px;
          border-radius:4px;
          margin-top:24px;
          cursor:pointer;
          font-weight:700;
          font-size:1.1rem;
          letter-spacing:1px;
          text-transform:uppercase;
          font-family:'Orbitron', monospace;
          box-shadow: 0 0 10px #fcee09;
        ">OK</button>
      </div>
    `;
    document.getElementById('purchase-modal-ok').onclick = function() {
      modal.style.display = 'none';
      cart = [];
      updateCartCount();
      renderCart();
      cartOverlay.style.display = 'none';
    };
  };
}

function renderCart() {
  if (cart.length === 0) {
    cartItems.innerHTML = '<div class="empty-cart">Your cart is empty</div>';
    cartFooter.style.display = 'none';
    return;
  }

  cartFooter.style.display = 'block';
  cartItems.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/60?text=No+Image'">
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">${formatPrice(item.price)}</div>
        <div class="cart-item-quantity">Qty: ${item.quantity}</div>
      </div>
      <button class="remove-btn" onclick="removeFromCart(${item.id})">×</button>
    </div>
  `).join('');

  cartTotal.textContent = `TOTAL: ${formatPrice(getTotalPrice())}`;

  const checkoutBtn = document.querySelector('.checkout-btn');
  if (checkoutBtn) {
    checkoutBtn.onclick = showPurchaseModal;
  }
}

function renderWeapons() {
  const filtered = getFilteredWeapons();

  weaponsGrid.innerHTML = filtered.map(weapon => `
    <div class="weapon-card">
      <div class="weapon-image">
        <img src="${weapon.image}" alt="${weapon.name}" onerror="this.src='https://via.placeholder.com/350x250?text=Weapon+Image'">
        <div class="weapon-overlay">
          <button class="view-btn" onclick="openWeaponModal(${weapon.id})">
            VIEW SPECS
          </button>
        </div>
      </div>
      <div class="weapon-info">
        <div class="weapon-category">Weapon</div>
        <h3 class="weapon-name">${weapon.name}</h3>
        <div class="weapon-stats">
          <div class="damage">CAL: ${weapon.specs.caliber}</div>
          <div class="price">${formatPrice(weapon.price)}</div>
        </div>
        <button class="buy-btn" onclick="addToCart(weapons.find(w => w.id === ${weapon.id}))">
          ADD TO CART
        </button>
      </div>
    </div>
  `).join('');

  updateWeaponCount();
}

function openWeaponModal(weaponId) {
  selectedWeapon = weapons.find(w => w.id === weaponId);
  if (!selectedWeapon) return

  document.getElementById('modal-weapon-category').textContent = 'Weapon';
  document.getElementById('modal-weapon-name').textContent = selectedWeapon.name;
  document.getElementById('modal-weapon-description').textContent = selectedWeapon.description;
  document.getElementById('modal-weapon-price').textContent = formatPrice(selectedWeapon.price);
  const modalImg = document.getElementById('modal-weapon-image');
  if (modalImg) {
    modalImg.src = selectedWeapon.image;
    modalImg.alt = selectedWeapon.name;
    modalImg.onerror = function() { this.src = 'https://via.placeholder.com/500x350?text=No+Image'; };
  }

  const specsGrid = document.getElementById('modal-specs-grid');
  specsGrid.innerHTML = `
    <div class="spec">
      <span class="spec-label">Type:</span>
      <span class="spec-value">${selectedWeapon.specs.type}</span>
    </div>
    <div class="spec">
      <span class="spec-label">Caliber:</span>
      <span class="spec-value">${selectedWeapon.specs.caliber}</span>
    </div>
    <div class="spec">
      <span class="spec-label">Operation:</span>
      <span class="spec-value">${selectedWeapon.specs.operation}</span>
    </div>
    <div class="spec">
      <span class="spec-label">Muzzle Velocity:</span>
      <span class="spec-value">${selectedWeapon.specs.muzzleVelocity}</span>
    </div>
  `;

  weaponModal.style.display = 'flex';
}

function closeWeaponModal() {
  weaponModal.style.display = 'none';
  selectedWeapon = null;
}

document.addEventListener('DOMContentLoaded', function() {
  setTimeout(() => {
    loadingScreen.style.display = 'none';
    app.style.display = 'block';
  }, 2000);

  if (categoryFilter) {
    categoryFilter.innerHTML = weaponTypes.map(type =>
      `<button class="filter-btn${type === "All" ? " active" : ""}" data-type="${type}">${type}</button>`
    ).join('');
  }

  renderWeapons();
  renderCart();

  categoryFilter.addEventListener('click', function(e) {
    if (e.target.classList.contains('filter-btn')) {
      categoryFilter.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
      });

      e.target.classList.add('active');

      selectedCategory = e.target.dataset.type;

      renderWeapons();
    }
  });

  cartBtn.addEventListener('click', function() {
    cartOverlay.style.display = 'block';
  });

  signupBtn.addEventListener('click', function() {
    signupModal.style.display = 'flex';
  });

  document.getElementById('close-cart').addEventListener('click', function() {
    cartOverlay.style.display = 'none';
  });

  cartOverlay.addEventListener('click', function(e) {
    if (e.target === cartOverlay) {
      cartOverlay.style.display = 'none';
    }
  });

  document.getElementById('close-modal').addEventListener('click', closeWeaponModal);

  document.getElementById('close-signup-modal').addEventListener('click', function() {
    signupModal.style.display = 'none';
  });

  weaponModal.addEventListener('click', function(e) {
    if (e.target === weaponModal) {
      closeWeaponModal();
    }
  });

  signupModal.addEventListener('click', function(e) {
    if (e.target === signupModal) {
      signupModal.style.display = 'none';
    }
  });

  document.getElementById('modal-add-to-cart').addEventListener('click', function() {
    if (selectedWeapon) {
      addToCart(selectedWeapon);
      closeWeaponModal();
    }
  });

  document.getElementById('browse-arsenal-btn').addEventListener('click', function() {
    document.getElementById('weapons').scrollIntoView({ behavior: 'smooth' });
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      if (this.id === 'about-link') return; // handled separately
      e.preventDefault();
      const targetId = this.getAttribute('href').slice(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Contact form handling
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const name = document.getElementById('contact-name').value;
      const email = document.getElementById('contact-email').value;
      const subject = document.getElementById('contact-subject').value;
      const message = document.getElementById('contact-message').value;
      
      // Show success message
      showContactSuccess(name);
      
      // Reset form
      contactForm.reset();
    });
  }

  // Sign up form handling
  const signupForm = document.getElementById('signup-form');
  if (signupForm) {
    signupForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const username = document.getElementById('signup-username').value;
      const email = document.getElementById('signup-email').value;
      const password = document.getElementById('signup-password').value;
      const confirmPassword = document.getElementById('signup-confirm-password').value;
      
      // Basic validation
      if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
      }
      
      if (password.length < 6) {
        alert('Password must be at least 6 characters long!');
        return;
      }
      
      // Set user as signed up
      window.isUserSignedUp = true;
      
      // Save login info to localStorage
      localStorage.setItem('silverArmsUser', JSON.stringify({
        username: username,
        email: email,
        password: password,
        signedUp: true
      }));
      
      // Show success message and close modal
      showSignupSuccess(username);
      signupModal.style.display = 'none';
      signupForm.reset();
    });
  }
  
  // Check for saved login info on page load
  const savedUser = localStorage.getItem('silverArmsUser');
  if (savedUser) {
    const user = JSON.parse(savedUser);
    if (user.signedUp) {
      window.isUserSignedUp = true;
      signupBtn.textContent = 'LOG OUT';
      signupBtn.style.background = 'linear-gradient(45deg, var(--cyber-red), #ff6b6b)';
      signupBtn.style.borderColor = 'var(--cyber-red)';
      signupBtn.disabled = false;
      signupBtn.onclick = function() {
        // Clear localStorage
        localStorage.removeItem('silverArmsUser');
        window.isUserSignedUp = false;
        // Reset button
        signupBtn.textContent = 'SIGN UP';
        signupBtn.style.background = 'linear-gradient(45deg, var(--cyber-blue), var(--cyber-cyan))';
        signupBtn.style.borderColor = 'var(--cyber-blue)';
        signupBtn.onclick = null;
        // Show modal for new signup
        signupModal.style.display = 'flex';
      };
    }
  }
});

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    if (weaponModal.style.display === 'flex') {
      closeWeaponModal();
    }
    if (cartOverlay.style.display === 'block') {
      cartOverlay.style.display = 'none';
    }
    if (signupModal.style.display === 'flex') {
      signupModal.style.display = 'none';
    }
  }
});

window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.openWeaponModal = openWeaponModal;
window.closeWeaponModal = closeWeaponModal;

// Contact form success function
function showContactSuccess(name) {
  let successModal = document.getElementById('contact-success-modal');
  if (!successModal) {
    successModal = document.createElement('div');
    successModal.id = 'contact-success-modal';
    successModal.style.position = 'fixed';
    successModal.style.top = '0';
    successModal.style.left = '0';
    successModal.style.width = '100vw';
    successModal.style.height = '100vh';
    successModal.style.background = 'rgba(0,0,0,0.8)';
    successModal.style.display = 'flex';
    successModal.style.alignItems = 'center';
    successModal.style.justifyContent = 'center';
    successModal.style.zIndex = '99999';
    successModal.innerHTML = `
      <div style="
        background: linear-gradient(145deg, #0a0a0a, #1a1a2e);
        color: #fff;
        border-radius: 15px;
        padding: 40px 30px 30px 30px;
        min-width: 400px;
        max-width: 90vw;
        box-shadow: 0 10px 40px #000, 0 0 0 3px #39ff14, 0 0 20px rgba(57,255,20,0.3);
        border: 2px solid #39ff14;
        position: relative;
        font-family: 'Rajdhani', monospace;
        text-align: center;
      ">
        <button id="contact-success-close" style="
          position: absolute;
          top: 15px;
          right: 20px;
          background: none;
          border: none;
          color: #e94560;
          font-size: 28px;
          cursor: pointer;
          font-weight: bold;
          transition: color 0.2s;
        ">&times;</button>
        
        <div style="margin-bottom: 25px;">
          <div style="font-size: 4rem; margin-bottom: 20px;">✅</div>
          <h2 style="color: #39ff14; margin: 0 0 15px 0; font-family: 'Orbitron', monospace; letter-spacing: 2px; text-transform: uppercase;">MESSAGE SENT!</h2>
          <p style="color: #fff; margin: 0; font-size: 1.1rem;">Thank you, <span style="color: #39ff14; font-weight: 600;">${name}</span>!</p>
        </div>
        
        <div style="background: rgba(57,255,20,0.1); border-radius: 10px; padding: 20px; border: 1px solid rgba(57,255,20,0.3);">
          <p style="color: #fff; margin: 0; line-height: 1.6;">
            Your message has been encrypted and sent to our secure servers.<br>
            We'll respond within 24 hours via your preferred contact method.
          </p>
        </div>
        
        <div style="margin-top: 25px; padding: 15px; background: rgba(0,245,255,0.1); border-radius: 8px; border: 1px solid rgba(0,245,255,0.3);">
          <p style="color: #00f5ff; margin: 0; font-size: 12px; font-weight: 600; letter-spacing: 1px;">
            🔒 MESSAGE ENCRYPTED & SECURED<br>
            All communications protected with military-grade protocols
          </p>
        </div>
      </div>
    `;
    document.body.appendChild(successModal);
  } else {
    successModal.style.display = 'flex';
  }

  document.getElementById('contact-success-close').onclick = function() {
    successModal.style.display = 'none';
  };
  
  successModal.onclick = function(e) {
    if (e.target === successModal) {
      successModal.style.display = 'none';
    }
  };
}

// Contact information function
function showContactInfo() {
  let contactModal = document.getElementById('contact-modal');
  if (!contactModal) {
    contactModal = document.createElement('div');
    contactModal.id = 'contact-modal';
    contactModal.style.position = 'fixed';
    contactModal.style.top = '0';
    contactModal.style.left = '0';
    contactModal.style.width = '100vw';
    contactModal.style.height = '100vh';
    contactModal.style.background = 'rgba(0,0,0,0.8)';
    contactModal.style.display = 'flex';
    contactModal.style.alignItems = 'center';
    contactModal.style.justifyContent = 'center';
    contactModal.style.zIndex = '99999';
    contactModal.innerHTML = `
      <div style="
        background: linear-gradient(145deg, #0a0a0a, #1a1a2e);
        color: #fff;
        border-radius: 15px;
        padding: 40px 30px 30px 30px;
        min-width: 400px;
        max-width: 90vw;
        box-shadow: 0 10px 40px #000, 0 0 0 3px #00f5ff, 0 0 20px rgba(0,245,255,0.3);
        border: 2px solid #00f5ff;
        position: relative;
        font-family: 'Rajdhani', monospace;
        text-align: center;
      ">
        <button id="contact-modal-close" style="
          position: absolute;
          top: 15px;
          right: 20px;
          background: none;
          border: none;
          color: #e94560;
          font-size: 28px;
          cursor: pointer;
          font-weight: bold;
          transition: color 0.2s;
        " >&times;</button>
              
        <div style="margin-bottom: 25px;">
          <h2 style="color: #00f5ff; margin: 0 0 10px 0; font-family: 'Orbitron', monospace; letter-spacing: 2px; text-transform: uppercase;">CONTACT INFO</h2>
        </div>
              
        <div style="background: rgba(0,245,255,0.1); border-radius: 10px; padding: 20px; margin: 20px 0; border: 1px solid rgba(0,245,255,0.3);">
                
          <div style="margin: 15px 0; text-align: left;">
            <div style="color: #00f5ff; font-weight: 600; margin-bottom: 5px;">📱 PHONE:</div>
            <div style="color: #fff; margin-bottom: 15px;">+961 70 402 982</div>
                      
            <div style="color: #00f5ff; font-weight: 600; margin-bottom: 5px;">📧 EMAIL:</div>
            <div style="color: #fff; margin-bottom: 15px;">bazzaldaniel77@gmail.com</div>
                      
            <div style="color: #00f5ff; font-weight: 600; margin-bottom: 5px;">📍 ADDRESS:</div>
            <div style="color: #fff; margin-bottom: 15px;">Hamra, Beirut, Lebanon</div>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(contactModal);
  } else {
    contactModal.style.display = 'flex';
  }

  document.getElementById('contact-modal-close').onclick = function() {
    contactModal.style.display = 'none';
  };
  
  contactModal.onclick = function(e) {
    if (e.target === contactModal) {
      contactModal.style.display = 'none';
    }
  };
}

// Sign up success function
function showSignupSuccess(username) {
  let successModal = document.getElementById('signup-success-modal');
  if (!successModal) {
    successModal = document.createElement('div');
    successModal.id = 'signup-success-modal';
    successModal.style.position = 'fixed';
    successModal.style.top = '0';
    successModal.style.left = '0';
    successModal.style.width = '100vw';
    successModal.style.height = '100vh';
    successModal.style.background = 'rgba(0,0,0,0.8)';
    successModal.style.display = 'flex';
    successModal.style.alignItems = 'center';
    successModal.style.justifyContent = 'center';
    successModal.style.zIndex = '99999';
    successModal.innerHTML = `
      <div style="
        background: linear-gradient(145deg, #0a0a0a, #1a1a2e);
        color: #fff;
        border-radius: 15px;
        padding: 40px 30px 30px 30px;
        min-width: 400px;
        max-width: 90vw;
        box-shadow: 0 10px 40px #000, 0 0 0 3px #a845f7, 0 0 20px rgba(168,69,247,0.3);
        border: 2px solid #a845f7;
        position: relative;
        font-family: 'Rajdhani', monospace;
        text-align: center;
      ">
        <button id="signup-success-close" style="
          position: absolute;
          top: 15px;
          right: 20px;
          background: none;
          border: none;
          color: #e94560;
          font-size: 28px;
          cursor: pointer;
          font-weight: bold;
          transition: color 0.2s;
        ">&times;</button>
        
        <div style="margin-bottom: 25px;">
          <div style="font-size: 4rem; margin-bottom: 20px;">🎉</div>
          <h2 style="color: #a845f7; margin: 0 0 15px 0; font-family: 'Orbitron', monospace; letter-spacing: 2px; text-transform: uppercase;">ACCOUNT CREATED!</h2>
          <p style="color: #fff; margin: 0; font-size: 1.1rem;">Welcome to Silver Arms, <span style="color: #a845f7; font-weight: 600;">${username}</span>!</p>
        </div>
        
        <div style="background: rgba(168,69,247,0.1); border-radius: 10px; padding: 20px; border: 1px solid rgba(168,69,247,0.3);">
          <p style="color: #fff; margin: 0; line-height: 1.6;">
            Your account has been successfully created and secured.<br>
            You can now browse and purchase premium weaponry.
          </p>
        </div>
        
        <div style="margin-top: 25px; padding: 15px; background: rgba(0,245,255,0.1); border-radius: 8px; border: 1px solid rgba(0,245,255,0.3);">
          <p style="color: #00f5ff; margin: 0; font-size: 12px; font-weight: 600; letter-spacing: 1px;">
            🔒 ACCOUNT SECURED & VERIFIED<br>
            All transactions protected with military-grade protocols
          </p>
        </div>
      </div>
    `;
    document.body.appendChild(successModal);
  } else {
    successModal.style.display = 'flex';
  }

  document.getElementById('signup-success-close').onclick = function() {
    successModal.style.display = 'none';
    // Update sign up button to show signed up status with logout option
    signupBtn.textContent = 'LOG OUT';
    signupBtn.style.background = 'linear-gradient(45deg, var(--cyber-red), #ff6b6b)';
    signupBtn.style.borderColor = 'var(--cyber-red)';
    signupBtn.disabled = false;
    signupBtn.onclick = function() {
      // Clear localStorage
      localStorage.removeItem('silverArmsUser');
      window.isUserSignedUp = false;
      // Reset button
      signupBtn.textContent = 'SIGN UP';
      signupBtn.style.background = 'linear-gradient(45deg, var(--cyber-blue), var(--cyber-cyan))';
      signupBtn.style.borderColor = 'var(--cyber-blue)';
      signupBtn.onclick = null;
      // Show modal for new signup
      signupModal.style.display = 'flex';
    };
  };
  
  successModal.onclick = function(e) {
    if (e.target === successModal) {
      successModal.style.display = 'none';
    }
  };
}

// Profile Card functionality
function toggleContactMenu(event) {
    event.stopPropagation();
    const contactMenu = document.getElementById('contactMenu');
    if (contactMenu) {
        contactMenu.style.display = contactMenu.style.display === 'none' ? 'block' : 'none';
    }
}

// Close contact menu when clicking outside
document.addEventListener('click', function(e) {
    const contactMenu = document.getElementById('contactMenu');
    const contactBtn = document.querySelector('.pc-contact-btn');
    if (contactMenu && !contactMenu.contains(e.target) && e.target !== contactBtn) {
        contactMenu.style.display = 'none';
    }
});

let profileCardContainer = null;
let currentX = 0, currentY = 0, targetX = 0, targetY = 0;
let rafId = null;

function initTiltEffect() {
    if (!profileCardContainer) {
        profileCardContainer = document.getElementById('profile-card-container');
    }
    const card = profileCardContainer ? profileCardContainer.querySelector('.pc-card') : null;
    const wrapper = profileCardContainer ? profileCardContainer.querySelector('.pc-card-wrapper') : null;
    if (!card || !wrapper) return;

    card.addEventListener('pointermove', handlePointerMove);
    card.addEventListener('pointerenter', handlePointerEnter);
    card.addEventListener('pointerleave', handlePointerLeave);
}

function handlePointerMove(e) {
    const card = e.currentTarget;
    const contactBtn = document.querySelector('.pc-contact-btn');
    
    // Don't tilt if hovering over contact button
    if (contactBtn && contactBtn.contains(e.target)) {
        return;
    }
    
    const rect = card.getBoundingClientRect();
    targetX = e.clientX - rect.left;
    targetY = e.clientY - rect.top;
    updateTilt();
}

function handlePointerEnter(e) {
    if (!profileCardContainer) {
        profileCardContainer = document.getElementById('profile-card-container');
    }
    const wrapper = profileCardContainer ? profileCardContainer.querySelector('.pc-card-wrapper') : null;
    const card = e.currentTarget;
    if (wrapper) wrapper.classList.add('active');
    card.classList.add('active');
    const rect = card.getBoundingClientRect();
    targetX = e.clientX - rect.left;
    targetY = e.clientY - rect.top;
}

function handlePointerLeave(e) {
    if (!profileCardContainer) {
        profileCardContainer = document.getElementById('profile-card-container');
    }
    const wrapper = profileCardContainer ? profileCardContainer.querySelector('.pc-card-wrapper') : null;
    const card = e.currentTarget;
    if (wrapper) wrapper.classList.remove('active');
    card.classList.remove('active');
    const width = card.clientWidth;
    const height = card.clientHeight;
    targetX = width / 2;
    targetY = height / 2;
}

function updateTilt() {
    if (!profileCardContainer) {
        profileCardContainer = document.getElementById('profile-card-container');
    }
    const card = profileCardContainer ? profileCardContainer.querySelector('.pc-card') : null;
    if (!card) return;

    const width = card.clientWidth || 1;
    const height = card.clientHeight || 1;

    const percentX = Math.min(Math.max((100 / width) * targetX, 0), 100);
    const percentY = Math.min(Math.max((100 / height) * targetY, 0), 100);

    const centerX = percentX - 50;
    const centerY = percentY - 50;

    const rotateX = -(centerX / 2.5);
    const rotateY = centerY / 2;

    const wrapper = profileCardContainer ? profileCardContainer.querySelector('.pc-card-wrapper') : null;
    if (wrapper) {
        wrapper.style.setProperty('--pointer-x', `${percentX}%`);
        wrapper.style.setProperty('--pointer-y', `${percentY}%`);
        wrapper.style.setProperty('--rotate-x', `${rotateX}deg`);
        wrapper.style.setProperty('--rotate-y', `${rotateY}deg`);
    }
}

document.addEventListener('DOMContentLoaded', function() {
  const aboutLink = document.getElementById('about-link');
  const overlay = document.getElementById('profile-card-overlay');
  if (aboutLink && overlay) {
    aboutLink.addEventListener('click', function(e) {
      e.preventDefault();
      overlay.style.display = 'flex';
      initTiltEffect();
      
      const closeBtn = document.getElementById('close-profile-card');
      if (!closeBtn) {
          const newCloseBtn = document.createElement('button');
          newCloseBtn.id = 'close-profile-card';
          newCloseBtn.className = 'close-btn';
          newCloseBtn.innerHTML = '×';
          newCloseBtn.style.position = 'absolute';
          newCloseBtn.style.top = '1rem';
          newCloseBtn.style.right = '1rem';
          newCloseBtn.style.zIndex = '1000';
          newCloseBtn.onclick = function() { overlay.style.display = 'none'; };
          const container = document.getElementById('profile-card-container');
          if (container) {
              container.appendChild(newCloseBtn);
          }
      }
    });
  }
});