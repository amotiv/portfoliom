import React from 'react'
import { motion } from 'framer-motion'
type Props = {}

export default function PortfolioProject({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-gray-700 p-10  hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 '>
        <motion.img
        initial={{
            y:-100,
            opacity: 0,
        }}
        transition={{duration: 1.2}}
        whileInView={{opacity: 1, y:0}}
        viewport={{once: true}}
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        src='https://media.licdn.com/dms/image/D4E03AQFY7u8EJOd92A/profile-displayphoto-shrink_800_800/0/1675751528831?e=1681948800&v=beta&t=-ns4YYCCsKrexBWe6oUQL6Iow0zcaU4RPPi-4NpU8r0'
        alt=''
        />
        <div className='px-0 md:px-10 text-center'>
            <div className='font-bold text-2xl mt-1'>Portfolio Website</div>
            <div className='flex space-x-2 my-2 justify-center'>
                <img className='h-10 w-10 rounded-full object-cover'
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKQAAABWCAMAAAB2Mc1hAAAAeFBMVEUiIiJk4/8aAABh2vtl5f9j4P8cAAAhHx4gGRYhHBpi3f8fFREdCAAhHRweCwBg1/Ze0e40X2tSsswwUlwmMjdYw99QrMUlLTErQ0o+eYhNpbxbyeUfEApVudQxVmJEi51Hk6c4aXdAgpQoOT9KnbM7cYATAAAuTFjA+e7jAAAEcUlEQVRoge2Zy7KrOAxFkW0ZsAk2EN4Qnjn5/z9sAUn61B10dU/aDFijxCRVO7YsbSmed3FxcXFxcXFxcXFx8b/ih/6/WHJKwJZsYfEvUX68LwXuNP1JnOWIaIe7/KzI+2hpKc9il7p+ox8cTG4FmEHvWxfowYCwuQH+0K7VvQlzKMqwTHqEvKKti6scsE9oqYA8dK3uIEjQhqHnazlZMJOUkwE7Se17YWgxOUdYRqNY2f6qK1PA5xMhLbt9ga1ijFxq+8JS8XxH3k2uoBSs8na810+RMnfKfsFyMX3PlDVKNV9dwSTys4iEb+DFCSUeTD6JJ0jgLCJTMb2PW1ccxhF49X5PO3mS45aNmI+t8z0LKWMpWO8oPvEsGvlP3/3f6A4lfqhlSqdL5JBKvVXuTX/nWt8OBV77w/SSJSPytCmKJuU4Jtmi2U8L58iTflwaM6atUYgKQRCA22vTpqMxZezeC4XyXvecg1DGcuyHuSbmoUdujRLAeV/fpdvS6EdVwwXl7/z58Gq0pex2ZGmx9h7PnDK74E0VOdxN7TUAkM9PtOQcEZ7bJfc3QfET0NPM4nPO6SON58wMRQ8yZE3FuluLCWugjzf76/ub1Y17aFiC7a1jVUMm7uGohMcT7eKdUcDJURSlgCrwoskKYafICysQZSFGyk0hu9NuTk7sb1gZWNnuJMIFeQ9r5MW1UJwrUcdetELPsdrvzI2tYCoX14cS9bfkdb1SiqKxtKSRVNqSIpOW+k8mp9LppPTIFh+fRK0TwDH2wgz4DmShF48Iyee+BA9sXYjsrHp9TpAiEOvOCx/iECkeodfVCN8jDl/KuqiP5CPGz3FHDW4i/MUcIs3ibz8Cm8+dZiM4sUPU2qjpOEL/bpTdrES87ucNa7zZDqvM/cjiclKOmh1qFXCQW9SRoD4Rhm5O12ymt+no3hiR9IcH0nJAailcaNzTI7QJ5fI4h5oMz5YUWTXPFduekTWqIY8pmyct7AnTkcpkmwEM5V3xMHgJpGzuhVrTbQkqhFdw4+peDtvUIHFofTWbjQBhVH5jPyvkUXC7+f7tFkQ5rD/slqv98czczjE6ORVGcYWmb8jqZlm1LFWWkf1teoP0wBSTdG/OdbRY3ltyu6g2qOBsIHlf23O7RKeYBlE1sayspqHJkbettW3LMW+GqSrJqz1O0T5QaaEiTm1YzLwWi64suwJbj8XUilHJrt2f9Yb8Dnx0xnFgbECeHWe8jYnO0dL+mgVFNUCSANTvcnjOWRDlcKqK38x9zlmQxwqlir8HVueZBfXfWRDVII7Iv/VFT6I/h0i6OMMRgz6bqTOkDnJmh/uJhrNcHLod7bZdviwLoLaHGhooSrnJpHB9niKXk5u0ODPJytkAr2njZM3BzCUtzWjv7qcsO/EMql9TC9BXe+MaVz2ATddewXyaP3K6wQghVD5171sedFOuaMkM56g3O9FSD/VL/go/LV+0tJzjr4c3vo71H80/FXN9kni8uLi4uLi4uLi4uLi4+I/8BdJ9SBue5Ha3AAAAAElFTkSuQmCC"
                alt='' />
                <img className='h-10 w-10 rounded-full object-cover'
                src="data:image/png;base64,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"
                alt='' />
            </div>
            <ul className='list-disc space-y-4 md:ml-5 text-lg text-left'>
                <li>FrontEnd: React, NextJS</li>
                <li>Libraries: TailwindCSS, FramerMotion</li>
            </ul>
        </div>
        
    </article>
    
  )
}