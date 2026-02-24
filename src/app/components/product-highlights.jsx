'use client';
import React from "react";

import { FaDove, FaCoffee, FaCheckCircle, FaShip, FaLeaf, FaMapPin, FaCameraRetro, FaCar, FaSwimmer, FaMapMarkedAlt, FaAnchor, FaUserShield, FaLandmark, FaUserCheck, FaImages, FaFeather, FaUsers, FaFish, FaCrosshairs, FaParachuteBox, FaUmbrellaBeach  } from "react-icons/fa";
import { FaPersonWalkingLuggage } from "react-icons/fa6";
import { MdDirectionsBoat, MdTempleHindu  } from "react-icons/md";
import { PiMotorcycleFill, PiIslandFill, PiSunHorizonFill } from "react-icons/pi";
import { GiSeaCliff, GiWaterfall, GiMountainRoad } from "react-icons/gi";
import { LuWaves } from "react-icons/lu";
import { FaShrimp } from "react-icons/fa6";
import { FiActivity } from "react-icons/fi";
import { BiSolidLandscape } from "react-icons/bi";
import { TbCliffJumping } from "react-icons/tb";



export default function ProductHighlights({ items = [] }){

    const iconMap = {
        mapPin: FaMapPin,
        walking: FaPersonWalkingLuggage,
        camera: FaCameraRetro,
        car: FaCar,
        fastBoat: MdDirectionsBoat,
        island: PiIslandFill,
        snorkel: FaSwimmer,
        map: FaMapMarkedAlt,
        cliff: GiSeaCliff,
        anchor: FaAnchor,
        waves: LuWaves,
        shield: FaUserShield,
        landmark: FaLandmark,
        temple: MdTempleHindu,
        userCheck: FaUserCheck,
        sunset: PiSunHorizonFill,
        shrimp: FaShrimp,
        images: FaImages,
        waterfall: GiWaterfall,
        feather: FaFeather,
        mountain: GiMountainRoad,
        activity: FiActivity,
        landscape: BiSolidLandscape,
        users: FaUsers,
        leaf: FaLeaf,
        mototcycle: PiMotorcycleFill,
        ship: FaShip,
        fish: FaFish,
        checkCircle: FaCheckCircle,
        crosshairs: FaCrosshairs,
        parachute: FaParachuteBox,
        umbrellaBeach: FaUmbrellaBeach,
        cliffJump: TbCliffJumping,
        coffee: FaCoffee,
        bird: FaDove,
    };

    return (
        <ul className="space-y-6">
            {items.map((item, index) => {
                const Icon = iconMap[item.icon];

                return (
                <li
                    key={index}
                    className="group flex items-center gap-4 p-4 rounded-md shadow hover:shadow transform hover:scale-105 transition-all duration-300 border-l-4 border-primary dark:shadow-gray-700"
                >
                    <span className="text-3xl text-primary dark:text-white flex items-center leading-none transition-transform duration-300 group-hover:scale-110 group-hover:text-primary">
                    {Icon && <Icon />}
                    </span>

                    <div>
                    <h6 className="font-semibold text-lg transition-colors duration-300 group-hover:text-primary">
                        {item.title}
                    </h6>
                    <p className="text-gray-400">
                        {item.desc}
                    </p>
                    </div>
                </li>
                );
            })}
        </ul>
    );
};