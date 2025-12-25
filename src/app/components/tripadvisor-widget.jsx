'use client'

import Script from 'next/script';

export default function TripAdvisorWidget() {
    return (
        <>
        <div
            id="TA_cdsratingsonlywide753"
            className="TA_cdsratingsonlywide"
        >
            <ul id="luq2dFk" className="TA_links lTRERkTjj">
            <li id="dzRbFv15c" className="zOdAueNGqpLh">
                <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.tripadvisor.com/Attraction_Review-g297701-d14982630-Reviews-Rukmana_Bali_Tour-Ubud_Gianyar_Regency_Bali.html"
                >
                <img
                    src="https://www.tripadvisor.com/img/cdsi/img2/branding/v2/Tripadvisor_lockup_horizontal_secondary_registered-18034-2.svg"
                    alt="TripAdvisor"
                />
                </a>
            </li>
            </ul>
        </div>

        <Script
            src="https://www.jscache.com/wejs?wtype=cdsratingsonlywide&uniq=753&locationId=14982630&lang=en_US&border=true&shadow=true&display_version=2"
            strategy="afterInteractive"
        />
        </>
    )
}