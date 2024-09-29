import React, { useState } from 'react';
import '../index.css';
import { PaintBucket, Type, LayoutTemplate, ImagePlus, CloudUpload, Layers2, Shirt, Brush } from 'lucide-react';

const Sidebar = () => {
    const [expanded, setExpanded] = useState(false);
    const [activeContent, setActiveContent] = useState(null);

    const handleButtonClick = (contentId) => {
        if (activeContent === contentId) {
            setExpanded(false);
            setActiveContent(null);
        } else {
            setExpanded(true);
            setActiveContent(contentId);
        }
    };

    return React.createElement(
        'div',
        {
            className: `flex absolute top-32 items-center transition-all duration-200 ease-out ${expanded ? 'w-[35vw] h-[70vh] bg-[#343434] text-white' : 'w-[3vw] h-[70vh] bg-transparent'}`,
        },
        React.createElement(
            'div',
            { className: 'p-4 flex flex-col gap-6' },
            React.createElement('button', {
                onClick: () => handleButtonClick(1),
                className: `bt1 ${activeContent === 1 ? 'text-orange-600' : ''}`,
                children: React.createElement(PaintBucket, { size: 28 }),
            }),
            React.createElement('button', {
                onClick: () => handleButtonClick(2),
                className: `bt1 ${activeContent === 2 ? 'text-orange-600' : ''}`,
                children: React.createElement(Type, { size: 28 }),
            }),
            // Other buttons go here...
        ),
        React.createElement(
            'div',
            {
                id: 'opacity34',
                className: `${expanded ? 'translate-x-0 opacity-100 transition-all duration-200 ease-out' : '-translate-x-full opacity-0 w-[30vw] h-[50vh]'}`,
            },
            activeContent === 1 && React.createElement(
                'div',
                { className: 'side w-[32vw] h-[70vh] border-l-[.11vw] border-l-white' },
                React.createElement(
                    'div',
                    { className: 'w-full h-full flex flex-col items-center gap-16 justify-start' },
                    React.createElement('div', { className: 'h-[5vh] py-6 font-[2vw] tracking-wider text-white' }, React.createElement('h1', {}, 'Colours')),
                    React.createElement(
                        'div',
                        { className: 'colors h-[40vh] w-full grid grid-cols-4 px-12' },
                        React.createElement(
                            'div',
                            { className: 'h-[13vh] w-full flex flex-col gap-3' },
                            React.createElement('button', { className: 'w-[4.5vw] h-[7vh] rounded-full bg-white' }),
                            React.createElement('label', { htmlFor: 'white', className: 'text-white px-[.7vw]' }, 'White')
                        ),
                        // Additional colors here...
                    )
                )
            ),
            // Handle other activeContent cases here...
        )
    );
};

export default Sidebar;
