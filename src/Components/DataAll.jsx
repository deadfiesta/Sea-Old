import Textfield from './Coral/Textfield'
import ToastShowcase from './Coral/Feedback/ToastShowcase'
import TooltipShowcase from './Coral/Feedback/TooltipShowcase'
import DialogueShowcase from './Coral/Feedback/DialogueShowcase'
import TextFieldShowcase from './Coral/Input/TextFieldShowcase'
import SkeletonShowcase from './Coral/Feedback/SkeletonShowcase'
import TextAreaShowcase from './Coral/Input/TextAreaShowcase'
import SelectShowcase from './Coral/Input/SelectShowcase'
import SideMenuShowcase from './Coral/Navigation/SideMenuShowcase'
import MenuBarShowcase from './Coral/Navigation/MenuBarShowcase'
import SelectTreeShowcase from './Coral/Input/SelectTreeShowcase'
import DrawerShowcase from './Coral/Pattern/DrawerShowcase'
import SidesheetShowcase from './Coral/Pattern/SidesheetShowcase'

const lastUpdated = () => {
    const updated = new Date(document.lastModified)
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const day = updated.getDay()
    const date = updated.getDate()
    const month = updated.getMonth()
    const year = updated.getFullYear()
    return (
        `${months[month]} ${date}, ${year}, ${days[day]}`
    )
}

const content = [
    {
        header: [
            {
                title: "UI Animation for Sea Coral",
                updated: lastUpdated(),
            }
        ],
        tabs: [
            {
                title: "Mock Up",
                id: "mockup",
                anchor: "/"
            },
            {
                title: "Coral Component",
                id: "coral",
                anchor: "/coral"
            },
            {
                title: "Research",
                id: "research",
                anchor: "/research"
            },
        ]
    },
    {
        research: [
            {
                topic: "Motion Principles",
                anchor: "motion",
                image: "./media/motion/functional01.gif",
                subtopics: [
                    {
                        title: "Functional",
                        anchor: "functional",
                        images: [
                            {
                                url: "./media/motion/functional03.gif",
                                caption: `Simple blinking to indicate ready for command`,
                            },
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
                            },
                            {
                                url: "./media/realism/realism03.gif",
                            }
                        ],
                        description: "People tend to accept artistic license, but they can feel disoriented when movement doesn’t make sense or appears to defy physical laws. Animation supports the essence of actual and real interaction, it creates the level of feelings and perception similar to what people feel when they interact with a physical object in real life.",
                    }
                ]
            },
            {
                topic: "Principle of Functionality",
                anchor: "functionality",
                image: "./media/informative/02.gif",
                subtopics: [
                    {
                        title: "Informative",
                        anchor: "informative",
                        images: [
                            {
                                url: "./media/informative/01.gif",
                            },
                            {
                                url: "./media/informative/02.gif",
                            },
                            {
                                url: "./media/informative/03.gif",
                            }
                        ],
                        description: "Motion design informs and provide context to users by highlighting relationships between elements in the interface, understanding the cause and effect of an action, and orientate the user within the app. Motion can hint and guide users to availability of an action and reacting by giving a feedback based on the action after.",
                    },
                    {
                        title: "Expressive",
                        anchor: "expressive",
                        images: [
                            {
                                url: "./media/expressive/01.gif",
                            },
                            {
                                url: "./media/expressive/02.gif",
                            },
                            {
                                url: "./media/expressive/03.gif",
                            }
                        ],
                        description: "It’s more than visual standards, convincing UI animations can make people feel that the movement they see on the screen is the brand speaking to them. Motion celebrates moments in user journeys and adds character to common interactions.",
                    },
                    {
                        title: "Emphasis",
                        anchor: "emphasis",
                        images: [
                            {
                                url: "./media/emphasis/02.gif",
                            }
                        ],
                        description: "Emphasising is the art of displaying the hierarchy of interaction or information using animation. If a key interaction is embedded in a component that is visually not prominent, that component is in need of emphasis. Emphasising is also useful to highlight the order of a process.",
                    },

                ]
            },
            {
                topic: "Principle of Value Adding",
                anchor: "valueadding",
                image: "./media/value/04.gif",
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
                        anchor: "personality",
                        images: [
                            {
                                url: "./media/value/04.gif",
                            }
                        ],
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
                anchor: "realismprinciple",
                subtopics: [
                    {
                        title: "Weight",
                        anchor: "weight",
                        images: [
                            {
                                url: "./media/realism/weight.gif",
                                caption: "Simple drop-down with items rolling in from top to bottom — almost like gravity pulls them into the UI."
                            }
                        ],
                        description: "As we know, most objects in the real world have size and weight. These dimensions give an object what is called a center of gravity and this has an influence on how it moves and rotates.",
                    },
                    {
                        title: "Gravity",
                        anchor: "gravity",
                        images: [
                            {
                                url: "./media/realism/gravity.gif",
                                caption: "Applying material design’s depth philosophy to this Google Bank example"
                            },
                            {
                                url: "./media/realism/gravity2.gif",
                                caption: "Using drop shadows to imply depth in a 2D space in UI interface"
                            },
                            {
                                url: "./media/realism/gravity3.gif",
                                caption: "Loading screen animated with real-world effect of gravity"
                            }
                        ],
                        description: "Our devices have two gravitational forces pulling at it — firstly from top to bottom on the Y-axis, and secondly into the depths of the UI on the Z-axis. Google realized very early on that our devices had depth and has built much of material design’s philosophy on what they refer to as elevation.",
                    },
                    {
                        title: "Action and Reaction",
                        anchor: "action",
                        images: [
                            {
                                url: "./media/realism/action.gif",
                                caption: "Button reacts violently to being tapped"
                            },
                            {
                                url: "./media/realism/action2.gif",
                                caption: "Both functional and natural, a pull-to-refresh example"
                            },
                            {
                                url: "./media/realism/action3.gif",
                                caption: "Exaggerated reaction of a performed action can entice and create excitement"
                            }
                        ],
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
                // credits: [
                //     {
                //         title: "UI Animation: A Complete Guide For Beginners",
                //         url: "https://careerfoundry.com/en/blog/ui-design/ui-animation-beginners-guide/",
                //     }
                // ],
                subtopics: [
                    {
                        title: "Micro-animations",
                        anchor: "microanim",
                        videos: [
                            {
                                url: "./media/types/microanimation.mp4",
                            },
                            {
                                url: "./media/types/microanimation2.mp4",
                            },
                            {
                                url: "./media/types/microanimation3.mp4",
                            },
                        ],
                        description: "Micro-animations work for buttons, links, sliders, icons, and other clickable elements. Micro-animations evoke emotions. They push the user to do simple, specific actions that he could forget or simply do not think about. With micro-animations, it’s possible to explain a lot without using a word.",
                    },
                    {
                        title: "Loading / Progress",
                        anchor: "loading",
                        videos: [
                            {
                                url: "./media/types/loading.mp4",
                            },
                            {
                                url: "./media/types/loading2.mp4",
                            },
                            {
                                url: "./media/types/loading3.mp4",
                            },
                        ],
                        description: "Loading and progress animations help to keep users informed by demonstrating the process of completing an action, or letting them know how long it will be until the action is completed. No one likes waiting for something to load, especially without an understanding of how long they’ll be waiting for. Progress bars, timelines, and pull-down-to-refresh functions eliminate stress and reinforce the sense that the user is moving forward.",
                    },
                    {
                        title: "Navigation",
                        anchor: "navigation",
                        videos: [
                            {
                                url: "./media/types/navigation.mp4",
                            },
                            {
                                url: "./media/types/navigation2.mp4",
                            },
                        ],
                        description: "Navigational animations guide the user through the interface. The more complex or comprehensive a website is, the more crucial navigational animations are in making the website intuitive. By offering prompts such as arrows, hover animations, or swipeable layout elements, the visual hierarchy becomes clearer, and the user can feel confident in where to go next.",
                    },
                    {
                        title: "Storytelling and Branding",
                        anchor: "storytelling",
                        videos: [
                            {
                                url: "./media/types/storytelling.mp4",
                            },
                            {
                                url: "./media/types/storytelling2.mp4",
                            },
                            {
                                url: "./media/types/storytelling3.mp4",
                            },
                        ],
                        description: "Often found on welcome screens, decorative animations are a fantastic way to strengthen the brand identity and tell a story in a matter of seconds. Animation can be used to attract users to certain brand elements, and for showcasing a product in a fun and engaging way. A classic example of storytelling and branding animation would be an animated logo that instantly lets people know what kind of brand you are.",
                    },

                ]
            },
            {
                topic: "Timing and Spacing",
                anchor: "timespace",
                credits: [
                    {
                        title: "Animation Principles for UX and UI Designers",
                        url: "https://uxplanet.org/animation-that-matters-adding-value-to-your-interface-65496fe4c182"
                    }
                ],
                subtopics: [
                    {
                        title: "Optimal Duration",
                        anchor: "optimal",
                        images: [
                            {
                                url: "./media/duration/optimal.gif",
                                caption: "200ms to 500ms seconds is a good range to start with for interface animations"
                            }
                        ],
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
                        images: [
                            {
                                url: "./media/duration/large.gif",
                                caption: "Duration of the animation differs depending on the size of the object and the traveled distance"
                            }
                        ],
                        description: "Animated elements that traverse a large portion of the screen have the longest durations.",
                    },

                ]
            },
            {
                topic: "The Basics of Easing",
                anchor: "basics",
                credits: [
                    {
                        title: "The Ultimate Guide to Proper Use of Animation in UX",
                        url: "https://uxdesign.cc/the-ultimate-guide-to-proper-use-of-animation-in-ux-10bd98614fa9",
                    }
                ],
                subtopics: [
                    {
                        title: "Ease-in-out / Standard Ease",
                        anchor: "standard",
                        images: [
                            {
                                url: "./media/easing/ease.gif",
                                caption: "Animation with easing looks more natural compared to the linear one"
                            }
                        ],
                        description: "Easing helps to make the movement of the object more natural. For the animation not to look mechanical and artificial, the object should move with some acceleration or deceleration — just like all live objects in the physical world. Objects with an ease-in-out gain speed at the beginning and then slowly drop it back to zero. That type of movement is the most frequently used in interface animation. Whenever you doubt what type of motion to use in your animation, use standard curve.",
                    },
                    {
                        title: "Symmetry / Asymmetry Curve",
                        anchor: "curve",
                        images: [
                            {
                                url: "./media/easing/symmetry.gif",
                                caption: "Difference between symmetric and asymmetric standard curve"
                            }
                        ],
                        description: "According to Material Design Guidelines, it is better to use an asymmetric curve to make the movement look more natural and realistic. The end of the curve must be more emphasized than its beginning, so that the duration of acceleration is shorter than that of slowing down. In this case, the user will pay more attention to the final movement of the element and thus to its new state.",
                    },
                    {
                        title: "Ease-in / Acceleration",
                        anchor: "acceleration",
                        images: [
                            {
                                url: "./media/easing/easein.gif",
                            }
                        ],
                        description: "Ease-in or acceleration curve is the movement that starts slowly and accelerates over time. Ease-in-out is used when the objects move from one part of the screen to another. In such case, animation avoids the eye-catching and dramatic effect.",
                    },
                    {
                        title: "Ease-out / Deceleration",
                        anchor: "deceleration",
                        images: [
                            {
                                url: "./media/easing/easeout.gif",
                            }
                        ],
                        description: "Easing out causes the animation to start more quickly than linear ones, and it also has deceleration at the end. This type of curve should be used when the element emerges on the screen — it flies up on the screen at full speed, gradually slows down until it completely stops. This can also be applied to different cards or objects that appear from the outside of the screen.",
                    },
                    {
                        title: "Linear",
                        anchor: "linear",
                        images: [
                            {
                                url: "./media/easing/linear.gif",
                            }
                        ],
                        description: "Linear motion move in a constant speed from the start to the end. Linear motion can, for example, be used only when the object changes its color or transparency. Generally speaking, we can use it for the states when an object does not change its position or it’s intended to be used in a loop.",
                    },

                ]
            },
            {
                topic: "Choreography",
                anchor: "choreography",
                subtopics: [
                    {
                        title: "Equal Interaction",
                        anchor: "equal",
                        images: [
                            {
                                url: "./media/choreography/equal.gif",
                                caption: "User’s attention should be guided in one fluid direction"
                            },
                            {
                                url: "./media/choreography/equal2.gif",
                                caption: "Diagonal appearance for the tabular view of cards"
                            }
                        ],
                        description: "Equal interaction means that the appearance of all objects obeys to one particular rule.",
                    },
                    {
                        title: "Subordinate Interaction",
                        anchor: "subordinate",
                        images: [
                            {
                                url: "./media/choreography/subordinate.gif",
                                caption: "It is worth animating only one central object and all the rest subjecting to it."
                            },
                            {
                                url: "./media/choreography/subordinate2.gif",
                                caption: "The motion of an object that disproportionately changes its size should be arranged along an arc"
                            }
                        ],
                        description: "Subordinate interaction means that we have one central object which attracts all user’s attention, and all other elements are subordinate to it. This type of animation gives the sense of order and draws more attention to the main content. ",
                    }
                ]
            },
            {
                topic: "Best Practices for UI Animation",
                anchor: "practices",
                credits: [
                    {
                        title: "Good to Great UI Animation Tips",
                        url: "https://uxdesign.cc/good-to-great-ui-animation-tips-7850805c12e5"
                    }
                ],
                subtopics: [
                    {
                        title: "Make the Content in Tabs Slide",
                        anchor: "tabs",
                        images: [
                            {
                                url: "./media/practices/slide.gif",
                                caption: "The content on the left fades in and out. The one on the right slides with the tabs."
                            }
                        ],
                        description: "When you design an interaction like a tab or a fly-out menu, try putting the position of the content relative to the action that opens it. This way you can animate not only the visibility of the content but the position too. Oh, and while you’re at it, add a swipe gesture that takes you from one piece of content to the other.",
                    },
                    {
                        title: "Connect the Shared Elements of a Card",
                        anchor: "connecting",
                        images: [
                            {
                                url: "./media/practices/connect.gif",
                                caption: "The content on the left opens a new screen that slides up. The card on the right expands and fills the screen."
                            }
                        ],
                        description: "When animating between different states, see if there are any shared elements between them and connect them. With InVision Studio, components that are repeated between two linked screens are automatically connected when you create a Motion transition. This makes prototyping animations a breeze.",
                    },
                    {
                        title: "Use a Cascading Effect in your Content",
                        anchor: "cascading",
                        images: [
                            {
                                url: "./media/practices/cascading.gif",
                                caption: "The cards on the left appear by sliding and fading in. The ones on the right feature the same animation, but each card has a short delay."
                            }
                        ],
                        description: "To accomplish the waterfall effect, try applying delays to each piece or group of content. Keep the same easing and duration, so it feels consistent. Don’t cascade each little element, though—animate the groups of content. Keep the animation quick and snappy. Google recommends beginning each element no more than 20ms apart. Check out the choreography principle in Material Motion to see more examples.",
                    },
                    {
                        title: "Make the Content Push other Elements Out of the Way",
                        anchor: "pushing",
                        images: [
                            {
                                url: "./media/practices/pushing.gif",
                                caption: "The animation on the left animates on top of the other content. The animation on the right pushes the content out as it grows."
                            }
                        ],
                        description: "Make the elements in your content aware of their surroundings. This means making the content attract or repel the elements around it.",
                    },
                    {
                        title: "Make Menus Appear in Context",
                        anchor: "menus",
                        images: [
                            {
                                url: "./media/practices/context.gif",
                                caption: "The menu on the left flies in from below. The menu on the right expands from the action that created it."
                            }
                        ],
                        description: "Great animated menus emerge from the action that created them, growing from the point of touch.",
                    },
                    {
                        title: "Use Buttons to Show Different States",
                        anchor: "button",
                        images: [
                            {
                                url: "./media/practices/button.gif",
                                caption: "The button on the left shows text indicating states. The button on the right uses the container to show different events."
                            }
                        ],
                        description: "Try using the container of a button to provide visual feedback of a status. For example, you could replace the CTA with a spinner or a loading animation; or you could add an animation to the background showing progress.",
                    },
                    {
                        title: "Bring Attention to Something Important",
                        anchor: "attention",
                        images: [
                            {
                                url: "./media/practices/attention.gif",
                                caption: "The example on the left uses color and position to make an element stand out. The one on the right uses a subtle animation to call the user’s attention."
                            }
                        ],
                        description: "When the user needs to act on something important, try animating the actions to attract their attention. Start with a subtle animation and increase the intensity (change of size, color, and speed) in relation to how important the action is.",
                    },
                ]
            },
            {
                topic: "Design System Resources",
                anchor: "resources",
                subtopics: [
                    {
                        title: "Material Design by Google",
                        anchor: "google",
                        link: "https://material.io/design",
                        images: [
                            {
                                url: "./media/resources/google.gif",
                                caption: "Material motion system"
                            },
                            {
                                url: "./media/resources/google2.gif",
                                caption: "Guide to Material Motion in After Effects"
                            },
                            {
                                url: "./media/resources/google3.gif",
                                caption: "Welcome to WearOS"
                            }
                        ],
                        description: "Material Design is a design language developed by Google in 2014. Expanding on the 'cards' that debuted in Google Now, Material Design uses more grid-based layouts, responsive animations and transitions, padding, and depth effects such as lighting and shadows.",
                    },
                    {
                        title: "Human Interface Guidelines by Apple",
                        anchor: "apple",
                        link: "https://developer.apple.com/design/human-interface-guidelines/",
                        images: [
                            {
                                url: "./media/resources/apple.jpeg",
                                caption: "Get in-depth information and UI resources for designing great apps that integrate seamlessly with Apple platforms."
                            }
                        ],
                        description: "The Human Interface Guidelines — “HIG” for short — offers in-depth information and UI resources for all of Apple’s platforms, including specific technology areas. The HIG is full of information for designers that can help them create more compelling, intuitive, and beautiful experiences and design better apps.",
                    },
                    {
                        title: "Fluent UI by Microsoft",
                        anchor: "microsoft",
                        link: "https://www.microsoft.com/design/fluent/",
                        videos: [
                            {
                                url: "./media/resources/microsoft.mp4",
                                caption: "Fluent System Icons"
                            },
                            {
                                url: "./media/resources/microsoft2.mp4",
                                caption: "Microsoft Teams Pride Background"
                            },
                            {
                                url: "./media/resources/microsoft3.mp4",
                                caption: "Pride 2020 Gear"
                            }
                        ],
                        description: "Fluent is an open-source, cross-platform design system that gives designers and developers the frameworks they need to create engaging product experiences—accessibility, internationalization, and performance included.",
                    },
                    {
                        title: "Audi Design System",
                        anchor: "audi",
                        link: "https://www.audi.com/ci/en/guides/user-interface/introduction.html",
                        images: [
                            {
                                url: "./media/resources/audi.jpg",
                            },
                        ],
                        description: "Audi user interfaces are as varied as their uses – ranging from inspiring websites to applications for a particular service. The aim is to create varied solutions and a well-balanced, system-wide user experience – from the app to the vehicle. The basis for this is provided by a joint set of components, modules and animations.",
                    },
                    {
                        title: "Carbon Design System by IBM",
                        anchor: "ibm",
                        link: "https://www.carbondesignsystem.com/",
                        videos: [
                            {
                                url: "./media/resources/ibm.mp4",
                            },
                            {
                                url: "./media/resources/ibm2.mp4",
                            },
                            {
                                url: "./media/resources/ibm3.mp4",
                            },
                        ],
                        description: "Carbon is IBM’s open source design system for products and digital experiences. With the IBM Design Language as its foundation, the system consists of working code, design tools and resources, human interface guidelines, and a vibrant community of contributors.",
                    },
                ]
            }
        ],
        coral: [
            {
                topic: "By Product / Platform",
                anchor: "product",
                subtopics: [
                    {
                        title: "SealCloud",
                        anchor: "sealcloud",
                        videos: [
                            {
                                url: "./media/skeleton/skeleton1.mp4",
                                type: "SealCloud",
                                caption: "Refresh Loading Skeleton",
                            },
                            {
                                url: "./media/sidemenu/sidemenu1.mp4",
                                type: "SealCloud",
                                caption: "Side Menu Expand",
                            },
                            {
                                url: "./media/drawers/drawer1.mp4",
                                type: "SealCloud",
                                caption: "Drawer View Instance Detail",
                            },
                            {
                                url: "./media/drawers/drawer2.mp4",
                                type: "SealCloud",
                                caption: "Add Data Disk Drawer",
                            },

                        ],
                        description: <Textfield />,
                    },
                    {
                        title: "Review System",
                        anchor: "review-system",
                        videos: [
                            {
                                url: "./media/page/page1.mp4",
                                type: "Review System",
                                caption: "Page Reload",
                            },
                            {
                                url: "./media/sidemenu/sidemenu2.mp4",
                                type: "Review System",
                                caption: "Side Menu Expand on Small Screen",
                            },
                        ],
                        description: <Textfield />,
                    },
                    {
                        title: "Investment System",
                        anchor: "investment",
                        videos: [
                            {
                                url: "./media/sidemenu/sidemenu4.mp4",
                                type: "Investment System",
                                caption: "Side Menu Collapse",
                            },
                            {
                                url: "./media/tabs/tab4.mp4",
                                type: "Investment System",
                                caption: "Post Deals Intake"
                            },
                        ],
                        description: <Textfield />,
                    },
                    {
                        title: "IT Center",
                        anchor: "itcenter",
                        videos: [
                            {
                                url: "./media/sidemenu/sidemenu3.mp4",
                                type: "IT Center",
                                caption: "Side Menu Collapse",
                            },

                            {
                                url: "./media/tabs/tab5.mp4",
                                type: "IT Center",
                                caption: "Ticket Details Activity"
                            },
                        ],
                        description: <Textfield />,
                    },

                ]
            },
            {
                topic: "Large Elements",
                anchor: "large",
                subtopics: [
                    {
                        title: "Skeleton",
                        anchor: "skeletonnav",
                        videos: [
                            {
                                url: "./media/skeleton/skeleton1.mp4",
                                type: "SealCloud",
                                caption: "Refresh Loading Skeleton",
                            },
                        ],
                        description: "The skeleton screen is a version of the user interface that mimics the page's layout. The skeleton loading screen shows the page in a shape similar to the actual content as it is loading and becoming available",
                    },
                    {
                        title: "Page",
                        anchor: "page",
                        videos: [
                            {
                                url: "./media/page/page1.mp4",
                                type: "Review System",
                                caption: "Page Reload",
                            },
                        ],
                        description: "The skeleton screen is a version of the user interface that mimics the page's layout. The skeleton loading screen shows the page in a shape similar to the actual content as it is loading and becoming available",
                    },
                    {
                        title: "Side Menu",
                        anchor: "side",
                        videos: [
                            {
                                url: "./media/sidemenu/sidemenu1.mp4",
                                type: "SealCloud",
                                caption: "Side Menu Expand",
                            },
                            {
                                url: "./media/sidemenu/sidemenu2.mp4",
                                type: "Review System",
                                caption: "Side Menu Expand on Small Screen",
                            },
                            {
                                url: "./media/sidemenu/sidemenu3.mp4",
                                type: "IT Center",
                                caption: "Side Menu Collapse",
                            },
                            {
                                url: "./media/sidemenu/sidemenu4.mp4",
                                type: "Investment System",
                                caption: "Side Menu Collapse",
                            },
                        ],
                        description: "Left navigation facilitates a vertical scanning direction, this greatly improves speed, it also requires fewer visual fixations so we can see multiple navigation links at the same time.",
                    },
                    {
                        title: "Drawers",
                        anchor: "drawers",
                        videos: [
                            {
                                url: "./media/drawers/drawer1.mp4",
                                type: "SealCloud",
                                caption: "View Instance Detail",
                            },
                            {
                                url: "./media/drawers/drawer2.mp4",
                                type: "SealCloud",
                                caption: "Add Data Disk Drawer",
                            },
                        ],
                        description: "Drawers are panels that slide in and out from the right. They help users complete tasks faster and in context.",
                    },
                    {
                        title: "Tabs",
                        anchor: "tabs",
                        videos: [
                            {
                                url: "./media/tabs/tab1.mp4",
                                type: "SealCloud",
                                caption: "Tab in a Drawer Preview for an Instance"
                            },
                            {
                                url: "./media/tabs/tab2.mp4",
                                type: "SealCloud",
                                caption: "Cluster Overview Tabs"
                            },
                            {
                                url: "./media/tabs/tab3.mp4",
                                type: "SealCloud",
                                caption: "Instance Page View"
                            },
                            {
                                url: "./media/tabs/tab4.mp4",
                                type: "Investment System",
                                caption: "Post Deals Intake"
                            },
                            {
                                url: "./media/tabs/tab5.mp4",
                                type: "IT Center",
                                caption: "Ticket Details Activity"
                            },
                        ],
                        description: "Tabs enable users to jump to their target section quickly.",
                    },

                ]
            },
            {
                topic: "Medium Elements",
                anchor: "medium",
                subtopics: [
                    {
                        title: "Modals / Dialogs",
                        anchor: "modal",
                        videos: [
                            {
                                url: "./media/modals/modal1.mp4",
                                type: "SealCloud",
                                caption: "View More Info on SSH Proxy"
                            },
                            {
                                url: "./media/modals/modal2.mp4",
                                type: "SealCloud",
                                caption: "Delete Warning Modal"
                            },
                            {
                                url: "./media/modals/modal3.mp4",
                                type: "SealCloud",
                                caption: "Confirmation Modal"
                            },
                            {
                                url: "./media/modals/modal4.mp4",
                                type: "IT Center",
                                caption: "Leave Page Confirmation"
                            },
                            {
                                url: "./media/modals/modal5.mp4",
                                type: "IT Center",
                                caption: "Apply for Multiple Assets"
                            },
                        ],
                        description: "A modal is a window that appears on top of a parent screen. It’s called ‘modal’ because it creates a mode that disables the parent screen but keeps it visible. Users must interact with the modal to return to the main screen.",
                    }

                ]
            },
            {
                topic: "Small Elements",
                anchor: "small",
                subtopics: [
                    {
                        title: "Drop Down List",
                        anchor: "drop",
                        videos: [
                            {
                                url: "./media/dropdown/dropdown1.mp4",
                                type: "SealCloud",
                                caption: "View More Options"
                            },
                            {
                                url: "./media/dropdown/dropdown2.mp4",
                                type: "SealCloud",
                                caption: "[SealCloud] Support and Help"
                            },
                            {
                                url: "./media/dropdown/dropdown3.mp4",
                                type: "SealCloud",
                                caption: "[SealCloud] Account Option"
                            },
                        ],
                        description: "A dropdown menu is a design pattern letting you display a list of contents, navigation points, and functions without flooding the user with many options simultaneously. Users find a list of options when they click the menu label or hover the cursor over it, and can select one of these options by clicking on the appropriate content name.",
                    },
                    {
                        title: "Buttons",
                        anchor: "button",
                        videos: [
                            {
                                url: "./media/buttons/button1.mp4",
                                type: "SealCloud",
                                caption: "Side Menu Button"
                            },
                        ],
                        description: "Material Design uses a ripple effect to give users feedback in a simple, elegant way.",
                    }

                ]
            },

        ],
        mockup: [
            {
                topic: "Feedback",
                anchor: "feedback",
                subtopics: [
                    {
                        title: "Toast",
                        anchor: "toast",
                        component: <ToastShowcase />
                    },
                    {
                        title: "Tooltip",
                        anchor: "tooltip",
                        component: <TooltipShowcase />
                    },
                    {
                        title: "Dialog",
                        anchor: "dialog",
                        component: <DialogueShowcase />
                    },
                    {
                        title: "Skeleton",
                        anchor: "skel",
                        component: <SkeletonShowcase />
                    }
                ]
            },
            {
                topic: "Pattern",
                anchor: "pattern",
                subtopics: [
                    {
                        title: "Drawer",
                        anchor: "drawershowcase",
                        component: <DrawerShowcase />
                    },
                    {
                        title: "Side Sheet",
                        anchor: "sidesheetshowcase",
                        component: <SidesheetShowcase />
                    }
                ]
            },
            {
                topic: "Input",
                anchor: "input",
                subtopics: [
                    {
                        title: "Text Field",
                        anchor: "textfield",
                        component: <TextFieldShowcase />
                    },
                    {
                        title: "Text Area",
                        anchor: "textarea",
                        component: <TextAreaShowcase />
                    },
                    {
                        title: "Select",
                        anchor: "select",
                        component: <SelectShowcase />
                    },
                    {
                        title: "Tree Select",
                        anchor: "treeselect",
                        component: <SelectTreeShowcase />
                    },
                    {
                        title: "Input Group",
                        anchor: "inputgroup",
                    },
                    {
                        title: "Input Number",
                        anchor: "inputnumber",
                    },
                ]
            },
            {
                topic: "Navigation",
                anchor: "navi",
                subtopics: [
                    {
                        title: "Menu Bar",
                        anchor: "menubarshowcase",
                        component: <MenuBarShowcase />
                    },
                    {
                        title: "Side Menu",
                        anchor: "sidemenu",
                        component: <SideMenuShowcase />
                    }
                ]
            },
        ]
    }
]

export { content }
