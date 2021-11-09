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
                title: "CSS Animation",
                anchor: "cssanim"
            },
            {
                title: "CSS Transition",
                anchor: "csstransition"
            }
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
                anchor: "Storytelling"
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
                images: [
                    {
                        url: "./images/motion/functional01.gif"
                    },
                    {
                        url: './images/motion/functional02.gif'
                    }
                ],
                description: "Functional animation guide and provide visual feedback to the user. It enhances user experience with small animated details to improve usability and emotional appeal. It also reinforces the design and has very clear and logical purposes including: Reduce cognitive load. Prevent change blindness.",
            },
            {
                title: "Value Adding",
                description: "The purpose of adding motion is essentially to help users by making content easier on the eye, and helps compress complex things into byte-sized, easy-to-consume packages. It should enhance and improve usability rather than just jazz up your designs. Good animation is the one that users don’t even notice.",
            },
            {
                title: "Realism",
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
                description: "Motion design informs and provide context to users by highlighting relationships between elements in the interface, understanding the cause and effect of an action, and orientate the user within the app. Motion can hint and guide users to availability of an action and reacting by giving a feedback based on the action after.",
            },
            {
                title: "Expressive",
                description: "It’s more than visual standards, convincing UI animations can make people feel that the movement they see on the screen is the brand speaking to them. Motion celebrates moments in user journeys and adds character to common interactions.",
            },
            {
                title: "Emphasis",
                description: "Emphasising is the art of displaying the hierarchy of interaction or information using animation. If a key interaction is embedded in a component that is visually not prominent, that component is in need of emphasis. Emphasising is also useful to highlight the order of a process.",
            },

        ]
    }
]

export { header, nav, content }
