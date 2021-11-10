const header = [{
    title: "UI Animation for Sea Coral",
    updated: "November 10, 2021",
}];

const nav = [
    {
        topic: "UI Motion Principle",
        anchor: "start",
        subtopics: [
            {
                title: "Principle of Functionality",
                anchor: "functionality"
            },
            {
                title: "Principle of Value Adding",
                anchor: "valueadd"
            },
            {
                title: "Principle of Realism",
                anchor: "realism"
            }
        ]
    },
    {
        topic: "About Web Animation",
        anchor: "webanim",
        subtopics: [
            {
                title: "Web Animation API",
                anchor: "webanim"
            },
            {
                title: "CSS Transition",
                anchor: "csstransition"
            },
            {
                title: "CSS Animation",
                anchor: "cssanim"
            },
            
        ]
    },
    {
        topic: "Types of UI Animation",
        anchor: "microanim",
        subtopics: [
            {
                title: "Micro-animation",
                anchor: "microanim"
            },
            {
                title: "Loading",
                anchor: "loading"
            },
            {
                title: "Navigation",
                anchor: "navigation"
            },
            {
                title: "Storytelling",
                anchor: "storytelling"
            }
        ]
    },
    {
        topic: "Timing and Spacing",
        anchor: "optimal",
        subtopics: [
            {
                title: "Optimal Duration",
                anchor: "optimal"
            },
            {
                title: "Small Transition",
                anchor: "small"
            },
            {
                title: "Medium Transition",
                anchor: "medium"
            },
            {
                title: "Large Transition",
                anchor: "large"
            }
        ]
    },
    {
        topic: "Basic of Easings",
        anchor: "standard",
        subtopics: [
            {
                title: "Ease-in-out / Standard Ease",
                anchor: "standard"
            },
            {
                title: "Curve Symmetry",
                anchor: "curve"
            },
            {
                title: "Ease-in / Acceleration",
                anchor: "acceleration"
            },
            {
                title: "Ease-out / Deceleration",
                anchor: "deceleration"
            },
            {
                title: "Linear",
                anchor: "linear"
            }
        ]
    },
    {
        topic: "Choreography",
        anchor: "equal",
        subtopics: [
            {
                title: "Equal Interaction",
                anchor: "equal"
            },
            {
                title: "Subordinate Interaction",
                anchor: "subordinate"
            }
        ]
    },
    {
        topic: "Best Practices",
        anchor: "tabs",
        subtopics: [
            {
                title: "Tabs Sliding",
                anchor: "tabs"
            },
            {
                title: "Connecting Elements",
                anchor: "connecting"
            },
            {
                title: "Cascading Effect",
                anchor: "cascading"
            },
            {
                title: "Pushing Elements",
                anchor: "pushing"
            },
            {
                title: "Menus in Context",
                anchor: "menus"
            },
            {
                title: "Button as States",
                anchor: "button"
            },
            {
                title: "Animate for Attention",
                anchor: "attention"
            }
        ]
    },
    {
        topic: "Resources",
        anchor: "google",
        subtopics: [
            {
                title: "Material Design by Google",
                anchor: "google"
            },
            {
                title: "Human Interface Guidelines by Apple",
                anchor: "apple"
            },
            {
                title: "Fluent UI by Microsoft",
                anchor: "microsoft"
            },
            {
                title: "Audi Design System",
                anchor: "audi"
            },
            {
                title: "Carbon Design System",
                anchor: "carbon"
            }
        ]
    },
]

const content = [
    {
        topic: "Motion Principles",
        anchor: "start",
        subtopics: [
            {
                title: "Functional",
                anchor: "functional",
                images: [
                    {
                        url: "./media/motion/functional01.gif",
                        caption: "Using buttons to indicate states and progress",
                    },
                    {
                        url: './media/motion/functional02.gif',
                        caption: "Animation to create an emotion appeal",
                    }
                ],
                description: "Functional animation guide and provide visual feedback to the user. It enhances user experience with small animated details to improve usability and emotional appeal. It also reinforces the design and has very clear and logical purposes including: Reduce cognitive load. Prevent change blindness.",
            },
            {
                title: "Value Adding",
                anchor: "value",
                videos: [
                    {
                        url: "./media/value/loading01.mp4",
                        caption: "Communicating status and providing feedback"
                    },
                    {
                        url: "./media/value/loading02.mp4",
                        caption: "Enhancing the sense of direct manipulation"
                    },
                    {
                        url: "./media/value/loading03.mp4",
                        caption: "Helping people to see the results of their actions"
                    },
                ],
                description: "The purpose of adding motion is essentially to help users by making content easier on the eye, and helps compress complex things into byte-sized, easy-to-consume packages. It should enhance and improve usability rather than just jazz up your designs. Good animation is the one that users don’t even notice.",
            },
            {
                title: "Realism",
                anchor: "realism",
                images: [
                    {
                        url: "./media/realism/realism01.gif",
                    },
                    {
                        url: "./media/realism/realism02.gif",
                    }
                ],
                description: "People tend to accept artistic license, but they can feel disoriented when movement doesn’t make sense or appears to defy physical laws. Animation supports the essence of actual and real interaction, it creates the level of feelings and perception similar to what people feel when they interact with a physical object in real life.",
            }
        ]
    },
    {
        topic: "Principle of Functionality",
        anchor: "functionality",
        subtopics: [
            {
                title: "Informative",
                anchor: "info",
                images: [
                    {
                        url: "./media/informative/01.gif",
                    }
                ],
                description: "Motion design informs and provide context to users by highlighting relationships between elements in the interface, understanding the cause and effect of an action, and orientate the user within the app. Motion can hint and guide users to availability of an action and reacting by giving a feedback based on the action after.",
            },
            {
                title: "Expressive",
                anchor: "express",
                images: [
                    {
                        url: "./media/expressive/01.gif",
                    }
                ],
                description: "It’s more than visual standards, convincing UI animations can make people feel that the movement they see on the screen is the brand speaking to them. Motion celebrates moments in user journeys and adds character to common interactions.",
            },
            {
                title: "Emphasis",
                anchor: "emphasis",
                videos: [
                    {
                        url: "./media/emphasis/01.mp4",
                    }
                ],
                description: "Emphasising is the art of displaying the hierarchy of interaction or information using animation. If a key interaction is embedded in a component that is visually not prominent, that component is in need of emphasis. Emphasising is also useful to highlight the order of a process.",
            },

        ]
    },
    {
        topic: "Principle of Value Adding",
        anchor: "valueadd",
        subtopics: [
            {
                title: "Fit in with the Design Principle",
                anchor: "principle",
                // images: [
                //     {
                //         url: "./media/informative/01.gif",
                //     }
                // ],
                description: "Implemented motion design should fit into the defined design principle. It does not conflict and create an impression that separates as a standalone from the brand’s design principles.",
            },
            {
                title: "Reflects Brand Personality",
                anchor: "reflects",
                // images: [
                //     {
                //         url: "./media/expressive/01.gif",
                //     }
                // ],
                description: "Motion design should add or reflect the brand personality and should be able to convey the overall brand tone. It reflects the image of the brand through movements and create a sense of trust and an emotional connection with your users.",
            },
            {
                title: "Purposeful",
                anchor: "purposeful",
                // videos: [
                //     {
                //         url: "./media/emphasis/01.mp4",
                //     }
                // ],
                description: "The animation should serve a logical purpose. The animation should be used wisely to tweak the user’s perception of time. Motion can help to ease the buffer when content is loaded to signify real-time updates and re-assure the users about their action, making it rewarding to perform the same action again.",
            },

        ]
    },
    {
        topic: "Principle of Realism",
        anchor: "realism",
        subtopics: [
            {
                title: "Weight",
                anchor: "weight",
                // images: [
                //     {
                //         url: "./media/informative/01.gif",
                //     }
                // ],
                description: "As we know, most objects in the real world have size and weight. These dimensions give an object what is called a center of gravity and this has an influence on how it moves and rotates.",
            },
            {
                title: "Gravity",
                anchor: "gravity",
                // images: [
                //     {
                //         url: "./media/expressive/01.gif",
                //     }
                // ],
                description: "Our devices have two gravitational forces pulling at it — firstly from top to bottom on the Y-axis, and secondly into the depths of the UI on the Z-axis. Google realized very early on that our devices had depth and has built much of material design’s philosophy on what they refer to as elevation.",
            },
            {
                title: "Action and Reaction",
                anchor: "purposeful",
                // videos: [
                //     {
                //         url: "./media/emphasis/01.mp4",
                //     }
                // ],
                description: "Interfaces are reactive by nature. This is especially true when it comes to changes in data, size, color, background and more. The role of animation here is to create the visual cues necessary for letting the user know where they are and what they’re doing.",
            },

        ]
    },
    {
        topic: "About Web Animation",
        anchor: "aboutanim",
        subtopics: [
            {
                title: "Web Animation API",
                anchor: "webanim",
                // images: [
                //     {
                //         url: "./media/informative/01.gif",
                //     }
                // ],
                description: "The Web Animations API provides a common language for browsers and developers to describe animations on DOM elements. This API was designed to underlie implementations of both CSS Animations and CSS Transitions, and leaves the door open to future animation effects.",
            },
            {
                title: "CSS Transition",
                anchor: "csstransition",
                // images: [
                //     {
                //         url: "./media/expressive/01.gif",
                //     }
                // ],
                description: "A CSS transition can only move from an initial state to the final state with no intermediate steps. It require a trigger like hover to run and the the animation is reversed when the trigger is removed. It is most suited for creating a simple change from one state to another.",
            },
            {
                title: "CSS Animation",
                anchor: "cssanim",
                // videos: [
                //     {
                //         url: "./media/emphasis/01.mp4",
                //     }
                // ],
                description: "A CSS transition can only move from an initial state to the final state with intermediate steps in between. The sequence can be looped infinitely and does not require a trigger to run. It can run in multiple directions such as forwards, reverse or alternate. It is best for creating a complex series of movements.",
            },

        ]
    },
    {
        topic: "Types of UI Animation",
        anchor: "types",
        subtopics: [
            {
                title: "Micro-animations",
                anchor: "webanim",
                // images: [
                //     {
                //         url: "./media/informative/01.gif",
                //     }
                // ],
                description: "Micro-animations work for buttons, links, sliders, icons, and other clickable elements. Micro-animations evoke emotions. They push the user to do simple, specific actions that he could forget or simply do not think about. With micro-animations, it’s possible to explain a lot without using a word.",
            },
            {
                title: "Loading / Progress",
                anchor: "loading",
                // images: [
                //     {
                //         url: "./media/expressive/01.gif",
                //     }
                // ],
                description: "Loading and progress animations help to keep users informed by demonstrating the process of completing an action, or letting them know how long it will be until the action is completed. No one likes waiting for something to load, especially without an understanding of how long they’ll be waiting for. Progress bars, timelines, and pull-down-to-refresh functions eliminate stress and reinforce the sense that the user is moving forward.",
            },
            {
                title: "Navigation",
                anchor: "cssanim",
                // videos: [
                //     {
                //         url: "./media/emphasis/01.mp4",
                //     }
                // ],
                description: "Navigational animations guide the user through the interface. The more complex or comprehensive a website is, the more crucial navigational animations are in making the website intuitive. By offering prompts such as arrows, hover animations, or swipeable layout elements, the visual hierarchy becomes clearer, and the user can feel confident in where to go next.",
            },
            {
                title: "Storytelling and Branding",
                anchor: "storytelling",
                // videos: [
                //     {
                //         url: "./media/emphasis/01.mp4",
                //     }
                // ],
                description: "Often found on welcome screens, decorative animations are a fantastic way to strengthen the brand identity and tell a story in a matter of seconds. Animation can be used to attract users to certain brand elements, and for showcasing a product in a fun and engaging way. A classic example of storytelling and branding animation would be an animated logo that instantly lets people know what kind of brand you are.",
            },

        ]
    },
    {
        topic: "Timing and Spacing",
        anchor: "timing",
        subtopics: [
            {
                title: "Optimal Duration",
                anchor: "optimal",
                // images: [
                //     {
                //         url: "./media/informative/01.gif",
                //     }
                // ],
                description: "When elements change their state or position, the duration of the animation should be slow enough to give users the possibility to notice the change, but at the same time quick enough not to cause waiting. 200ms to 500ms seconds is a good range to start with for interface animations. Any animation shorter than 100 ms is instantaneous and won’t be recognized at all. Whereas the animation longer than 1 second would convey a sense of delay and thus be boring for the user.",
            },
            {
                title: "Small Transition",
                anchor: "small",
                // images: [
                //     {
                //         url: "./media/expressive/01.gif",
                //     }
                // ],
                description: "Elements with small transition areas, such as icons and selection controls, have short durations.",
            },
            {
                title: "Medium Transition",
                anchor: "medium",
                // videos: [
                //     {
                //         url: "./media/emphasis/01.mp4",
                //     }
                // ],
                description: "Elements with larger transition areas, such as bottom sheets and expanding chips, have slightly longer durations.",
            },
            {
                title: "Large Transition",
                anchor: "large",
                // videos: [
                //     {
                //         url: "./media/emphasis/01.mp4",
                //     }
                // ],
                description: "Animated elements that traverse a large portion of the screen have the longest durations.",
            },

        ]
    },
    {
        topic: "The Basics of Easing",
        anchor: "basics",
        subtopics: [
            {
                title: "Ease-in-out / Standard Ease",
                anchor: "standard",
                // images: [
                //     {
                //         url: "./media/informative/01.gif",
                //     }
                // ],
                description: "Easing helps to make the movement of the object more natural. For the animation not to look mechanical and artificial, the object should move with some acceleration or deceleration — just like all live objects in the physical world. Objects with an ease-in-out gain speed at the beginning and then slowly drop it back to zero. That type of movement is the most frequently used in interface animation. Whenever you doubt what type of motion to use in your animation, use standard curve.",
            },
            {
                title: "Symmetry / Asymmetry Curve",
                anchor: "curve",
                // images: [
                //     {
                //         url: "./media/expressive/01.gif",
                //     }
                // ],
                description: "According to Material Design Guidelines, it is better to use an asymmetric curve to make the movement look more natural and realistic. The end of the curve must be more emphasized than its beginning, so that the duration of acceleration is shorter than that of slowing down. In this case, the user will pay more attention to the final movement of the element and thus to its new state.",
            },
            {
                title: "Ease-in / Acceleration",
                anchor: "acceleration",
                // videos: [
                //     {
                //         url: "./media/emphasis/01.mp4",
                //     }
                // ],
                description: "Ease-in or acceleration curve is the movement that starts slowly and accelerates over time. Ease-in-out is used when the objects move from one part of the screen to another. In such case, animation avoids the eye-catching and dramatic effect.",
            },
            {
                title: "Ease-out / Deceleration",
                anchor: "deceleration",
                // videos: [
                //     {
                //         url: "./media/emphasis/01.mp4",
                //     }
                // ],
                description: "Easing out causes the animation to start more quickly than linear ones, and it also has deceleration at the end. This type of curve should be used when the element emerges on the screen — it flies up on the screen at full speed, gradually slows down until it completely stops. This can also be applied to different cards or objects that appear from the outside of the screen.",
            },

        ]
    }
]

export { header, nav, content }
