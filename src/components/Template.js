import React, { useState } from 'react';
import '../index.css';
import { LayoutTemplate } from 'lucide-react';

const Template = () => {
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
            className: `flex absolute top-32 right-5 rounded-xl transition-all duration-200 ease-out ${expanded ? 'w-[45vw] h-[75vh] items-start justify-center bg-[#343434]' : 'w-[3.7vw] h-[7vh] bg-[#343434] items-center justify-center text-white'}`
        },
        React.createElement(
            'div',
            { className: 'w-full flex flex-col gap-6' },
            React.createElement('button', {
                onClick: () => handleButtonClick(1),
                className: `bt1 ${activeContent === 1 ? 'text-orange-600' : ''} ${expanded ? 'px-[.8vw] py-[.8vw]' : 'p-4'}`,
                children: React.createElement(LayoutTemplate, { size: 25 })
            })
        ),
        React.createElement(
            'div',
            {
                id: 'opacity34',
                className: `${expanded ? 'opacity-100 transition-all duration-300 ease-in w-[40vw] h-[75vh]' : 'opacity-0 w-[3.7vw] h-[7vh]'}`
            },
            activeContent === 1 && React.createElement(
                'div',
                { className: 'side w-[42vw] h-[75vh] absolute right-0 rounded-tr-lg rounded-br-lg flex flex-col items-center justify-center' },
                // Add your image here
                React.createElement('img', {
                    src: '/image121.png',
                    alt: 'Descriptive Alt Text',
                    className: 'w-60 h-auto rounded-md'
                })
            )
        )
    );
};

export default Template;
