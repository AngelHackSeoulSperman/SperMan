"use client"

import React from 'react';
import Image from 'next/image';
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { Button } from '@nextui-org/button';

const DetailPage = () => {
    const [selectedKeys, setSelectedKeys] = React.useState(new Set(["1"]));

    return (
        <div>
            <div className='flex flex-row w-full justify-between'>
                <div className="min-w-[100px] pr-4">
                    <Image
                        src="/image1.png"
                        alt="baby Image"
                        width={100}
                        height={100}
                    />
                </div>
                <div className='flex flex-col pb-4'>
                    <h1 className='font-bold text-base'>SP-240824-005</h1>
                    <p className='text-xs'>
                        <span className="inline-block w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                        3 in stock</p>
                    <p className='text-s'>An athletic, tall Black professional with a successful career and positive personality.</p>

                </div>
            </div>
            <div>
                <h1 className='font-bold text-base'>About</h1>
                <p className='text-s'>After his grandparents gifted him Legos as a child, SP-240824-005 was fascinated with building and innovation. With a BS in com sci (3.9 GPA), he’s now a director of engineering. This 6’0”, brown-eyed guy is proud of his success, as it’s allowed him to finance his little sister’s college tuition and his parents’ home. He’s always been eager and disciplined: playing on two varsity teams in high school, achieving a near-perfect ACT score, and even debating and doing Model UN to get out of his comfort zone.</p>
            </div>
            <Accordion
                className="w-full min-w-[320px]"
                selectedKeys={selectedKeys}
                onSelectionChange={setSelectedKeys}
            >
                <AccordionItem key="1" aria-label="Appearance" title="Appearance">


                    <div className="flex flex-col justify-start py-4">
                        <div className='flex justify-between w-full'>
                            <h1>Height</h1>
                            <p>6’(183cm)</p>
                        </div>
                        <div className='flex justify-between w-full'>
                            <h1>Weight</h1>
                            <p>164 lbs (74kg)</p>
                        </div>
                        <div className='flex justify-between w-full'>
                            <h1>Blood Type</h1>
                            <p>O+</p>
                        </div><div className='flex justify-between w-full'>
                            <h1>Eye Color</h1>
                            <p>Brown</p>
                        </div>
                        <div className='flex justify-between w-full'>
                            <h1>Skin Tone</h1>
                            <p>Dark</p>
                        </div>
                        <div className='flex justify-between w-full'>
                            <h1>Hair Color</h1>
                            <p>Dark Brown</p>
                        </div>
                        <div className='flex justify-between w-full'>
                            <h1>Hair Texture</h1>
                            <p>Curly</p>
                        </div>
                    </div>


                </AccordionItem>
            </Accordion>
            <div className='flex flex-row justify-between'>
                <Button color="black" variant="light" className="border border-black">
                    Hide
                </Button>
                <Button color="black" variant="light" className="border border-black">
                    Like
                </Button>

                <Button color="secondary">
                    Add to Cart
                </Button>
            </div>

        </div>
    )
}

export default DetailPage