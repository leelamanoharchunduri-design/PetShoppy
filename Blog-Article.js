
document.addEventListener("DOMContentLoaded", function () {

    // =========================================
    // ARTICLE CONTENT DATABASE
    // =========================================

    const articles = {

        "dog-nutrition": {
            category: "DOGS · NUTRITION",
            title: "Choosing the Right Food for Your Dog",
            subtitle: "A practical guide to understanding dog food, feeding routines, ingredients and everyday nutrition.",
            readTime: "7 min read",
            date: "Dog Nutrition Guide",
            tags: "Dog Food, Nutrition, Feeding, Pet Wellness",
            hero: "https://images.openai.com/static-rsc-4/giJiUzEYa9Ue0v2fmhqd4Mho7hTrWWZ3zLBbno1yjDypl6V2YELWMCaKdbOup8TKP9BF5NKGfbIuQ0y9JKW4RiGheu2iorzrkDsGMpS620qhSo60-aQkCuP-pgjImXGfdnUp19ecM8QednhUXB0kU3SOQm8djTfQ4uhHr0vIavni9Th-gxpZJotIbjCMy84j?purpose=fullsize",
            intro: "Food is an important part of your dog's everyday care. Choosing suitable food involves understanding your dog's age, activity, individual needs and the nutritional information on the packaging. Here are some useful points to consider when selecting food for your companion.",
            content: `
                <h2>1. Understand Your Dog's Nutritional Needs</h2>
                <p>Dogs need a balanced diet containing appropriate amounts of protein, fats, carbohydrates, vitamins and minerals. Their nutritional requirements can vary depending on their life stage, size, activity and individual health circumstances.</p>

                <figure>
                    <img src="https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?auto=format&fit=crop&w=1100&q=85" alt="Dog enjoying a meal">
                    <figcaption>Choose a complete and balanced food appropriate for your dog's needs.</figcaption>
                </figure>

                <h3>Consider these factors</h3>
                <ul>
                    <li><strong>Age:</strong> Puppies, adult dogs and senior dogs may need different nutritional formulations.</li>
                    <li><strong>Activity:</strong> Daily activity and lifestyle can influence feeding requirements.</li>
                    <li><strong>Size:</strong> Food format and portion guidance may differ across dog sizes.</li>
                    <li><strong>Individual needs:</strong> Allergies, sensitivities or health conditions may require professional dietary advice.</li>
                </ul>

                <h2>2. Read the Food Packaging Carefully</h2>
                <p>Product packaging provides useful information about ingredients, nutritional adequacy, feeding instructions, storage and the intended life stage. Take time to compare labels instead of choosing food based only on packaging or advertising.</p>

                <div class="article-image-pair">
                    <figure>
                        <img src="https://images.openai.com/static-rsc-4/F5ZPIpkKnM0sDQLlgl9JmHLnvrE6HlnUNlLhq8yCZu9M9_gVJZyjXITme8B_FuYMzufBHBTyQ5LYyYNzqDjtPSlxF3MJqbVKjH6sLks_boeYlx2oMb9KNsgsHC7epi-E_I8TGIRuo8Vkqa40ujuEduTRAoR1ypFZ20yN4iUxfH5c60iE4yhj3somAoij1YFf?purpose=fullsize" alt="Pet food in a bowl">
                        <figcaption>Check the product's nutritional information.</figcaption>
                    </figure>
                    <figure>
                        <img src="https://images.openai.com/static-rsc-4/cvW0lBoes61MKVtqJ82kRwr5YK_xq7Q0cSXBJe4Wk-eDQe7FHoOrIcihuwl_c-tUQWAQPxn_QF1fIhx4cO_pLnTsJug24eYnqVGeQ7sU446Z7JdAiNrX4vg7viIzPkhKvdO3oV_pn-4pHoxD0g71PH95wyIHhx7n7mqrIRUnjfjwzRlLkwMM1-vwWV3nOqLs?purpose=fullsize" alt="Dog at home">
                        <figcaption>Choose products suitable for your pet.</figcaption>
                    </figure>
                </div>

                <h3>Packaging details to check</h3>
                <ul>
                    <li>Intended life stage and feeding purpose.</li>
                    <li>Ingredient list and nutritional information.</li>
                    <li>Feeding recommendations and portion guidance.</li>
                    <li>Expiry date and storage instructions.</li>
                    <li>Manufacturer and product information.</li>
                </ul>

                <h2>3. Establish a Consistent Feeding Routine</h2>
                <p>A predictable feeding routine can help you monitor your dog's appetite and eating habits. Follow the food manufacturer's guidance and your veterinarian's recommendations for suitable portions and frequency.</p>

                <figure>
                    <img src="https://images.openai.com/static-rsc-4/C3Ma_v7WZvGB9WEQLZMHlOhrCOdF8Yh7KFLzd2R1Spw_Nb0g0us4lG-_bP2yiRQAt2lsEUeR-5JoDED4RJVNtM_YoylSIEwxijj_twR0F19xWnREpOaFHEBtWdDSuOjCHVrYu1hkGgC_EHJKBmP_hgFAJczPa-JBU5G4DaR2Fhb8T3yaYtOWv1zY-QW5wicD?purpose=fullsize" alt="Dog food being prepared">
                    <figcaption>Make mealtimes calm, comfortable and consistent.</figcaption>
                </figure>

                <h2>4. Introduce Food Changes Gradually</h2>
                <p>If you are changing your dog's regular food, ask your veterinarian whether the new food is appropriate. A gradual transition may help your dog adjust. Monitor appetite and digestion during the change and seek veterinary advice if concerning symptoms occur.</p>

                <div class="article-tip-box">
                    <i class="fa-solid fa-lightbulb"></i>
                    <div>
                        <h3>PetShoppy Tip</h3>
                        <p>Keep fresh drinking water available and store pet food according to the manufacturer's instructions.</p>
                    </div>
                </div>

                <h2>5. Build a Thoughtful Feeding Routine</h2>
                <div class="article-checklist">
                    <h3>Daily feeding checklist</h3>
                    <ul>
                        <li><i class="fa-solid fa-check-circle"></i> Follow the recommended feeding guidance.</li>
                        <li><i class="fa-solid fa-check-circle"></i> Provide clean drinking water.</li>
                        <li><i class="fa-solid fa-check-circle"></i> Keep feeding bowls clean.</li>
                        <li><i class="fa-solid fa-check-circle"></i> Store food safely.</li>
                        <li><i class="fa-solid fa-check-circle"></i> Monitor changes in appetite and eating habits.</li>
                    </ul>
                </div>

                <h2>Conclusion</h2>
                <p>Choosing dog food is about finding a suitable, balanced option for your dog's individual requirements. Read labels, follow feeding guidance and consult a veterinarian when you need help selecting a diet.</p>
            `
        },


        "cat-grooming": {
            category: "CATS · GROOMING",
            title: "Simple Grooming Tips for Healthy Cats",
            subtitle: "Learn about brushing, coat care, nail maintenance and creating a comfortable grooming routine for your cat.",
            readTime: "6 min read",
            date: "Cat Grooming Guide",
            tags: "Cat Grooming, Coat Care, Hygiene, Cats",
            hero: "https://images.openai.com/static-rsc-4/iaWNqM2t0y2XCgjcsMZCRvAzGY8euT2KrbuMdD_BEZ1bgAxzsFQNfAyXp8sdkYk4BtlKkwrlyJ3ucAoMZEjg3CANdZyV57FEyxmnO2MVqFvvZVeMEySsMOBzYvbbAp_3IhjAem4VnpXnqAgjSBf4hcqMFZXAPi91yy-h9599Abm1tMKI66iWX8GDnPARJu1Y?purpose=fullsize",
            intro: "Grooming is more than keeping your cat's coat looking neat. Gentle grooming routines help you become familiar with your cat's normal appearance and make it easier to notice changes that may need attention.",
            content: `
                <h2>1. Understand Your Cat's Coat</h2>
                <p>Cats have different coat lengths and textures. Short-haired cats may need a different brushing routine from long-haired cats. Choose grooming tools that are appropriate for your cat's coat and comfort.</p>

                <figure>
                    <img src="https://images.openai.com/static-rsc-4/0qRD6zGs5NDNN-96R75AJSrX8ABFrtrAgmJrg-oKHLjaOK6XyoSRYGaZNZCiILIqpIBkfn4cek0IO7UmulbMdcWqGeIgIOS5oOPuuMqGoShyuhr4Qe0hLr8bpPT75Ov1cYbr6AgvfGrUpRr95-Cz6I30mW8TRDUUPs41DxmP33_2fjJQ-gZ2Mvy92FgZhJ0w?purpose=fullsize" alt="Cat with a soft coat">
                    <figcaption>Every cat has individual grooming needs.</figcaption>
                </figure>

                <h2>2. Make Brushing a Positive Experience</h2>
                <p>Start with short, gentle sessions. Allow your cat to become familiar with the brush and reward calm cooperation with praise or a favourite activity.</p>

                <div class="article-image-pair">
                    <figure>
                        <img src="https://images.openai.com/static-rsc-4/N8wRAgIjuQIJMGinv6jNTjkpMs4mUxy15-DrgICaI7duUo_3J7SmJZ0yEcEJqKob_gAMIn9SseDknLKmJwly8xqZ6DNGZ5Mrdbz8BbKvXHU_rlOSKMWscLDagCuuDOq84jJzh3SwdtlgtRZWg7xR-mI0tCqrNz4EJfGqfqjkjmkIfmpxtTPzO2b-zIZaAGyR?purpose=fullsize" alt="Cat relaxing at home">
                        <figcaption>Choose a relaxed time for grooming.</figcaption>
                    </figure>
                    <figure>
                        <img src="https://images.openai.com/static-rsc-4/UEmGC6B7_8k5RWa-hAY8KMV4-iHGZjqB899hgkpECfOhZzfgTSV7sMdxCD1FgXIv6oGhrI5lBJJkdYOKo-UYY2wT8TZZgjQdprwQd4U68jKfrIo9QNeHHtM7HO7Tv9AeUeBRyQQ0ZJs2l196gbi8kXxhsqeckUVLaVJVWUu7vRRa5blbKygIxsKYdze7H8b4?purpose=fullsize" alt="Comfortable cat">
                        <figcaption>Keep grooming sessions gentle.</figcaption>
                    </figure>
                </div>

                <h3>Useful grooming essentials</h3>
                <ul>
                    <li>A suitable cat brush or comb.</li>
                    <li>Cat-specific grooming products when needed.</li>
                    <li>A soft towel for comfortable handling.</li>
                    <li>Cat nail clippers, if you have learned safe trimming techniques.</li>
                </ul>

                <h2>3. Take Care of Nail Maintenance</h2>
                <p>Check your cat's nails regularly. If trimming is needed, use suitable cat nail clippers and ask a veterinarian or experienced groomer to demonstrate the correct technique. Never cut into the sensitive inner part of the nail.</p>

                <figure>
                    <img src="https://images.openai.com/static-rsc-4/1FCXd-qGLx6dTR3XTBre5ML3GpxAj4wfcIcvink2RxV2jqmmFvdkuimyAB0TyzD6fOFNYP1LWwVdcr8KK9UmWYYRS2mku8GBwo8O4-Jg_tJaCmwDwAt4v9h0am49TRULbWXcJEU-cYBXoE004LP2FU9EZ65TI1KWdSOcmVlACP2f8IMiRpLGU91E3az5JNdt?purpose=fullsize" alt="Cat resting">
                    <figcaption>Gentle handling helps make routine care more comfortable.</figcaption>
                </figure>

                <h2>4. Keep Grooming Equipment Clean</h2>
                <p>Remove loose fur from brushes after use and clean grooming tools according to their care instructions. Keep these items in a clean, dry place.</p>

                <h2>5. Watch for Changes in the Coat or Skin</h2>
                <p>Notice changes such as unusual hair loss, persistent scratching, skin irritation or changes in coat condition. Contact a veterinarian if you notice concerning changes.</p>

                <div class="article-tip-box">
                    <i class="fa-solid fa-lightbulb"></i>
                    <div>
                        <h3>PetShoppy Tip</h3>
                        <p>Let your cat set the pace. Short, calm sessions are often easier than trying to complete every grooming task at once.</p>
                    </div>
                </div>

                <h2>Conclusion</h2>
                <p>A gentle and consistent grooming routine supports your cat's comfort. Select appropriate tools, handle your cat carefully and seek professional help whenever grooming becomes difficult.</p>
            `
        },


        "dog-training": {
            category: "DOGS · TRAINING",
            title: "Building Good Habits Through Dog Training",
            subtitle: "Explore positive reinforcement, basic commands, consistency and enjoyable activities for dogs.",
            readTime: "7 min read",
            date: "Dog Training Guide",
            tags: "Dog Training, Positive Reinforcement, Behaviour",
            hero: "https://images.openai.com/static-rsc-4/GE09bShafM_Dm2qyAN1UstTT1fR303JTpF0r8bFb9CbN-BXmIMpAj-NtglN3rqYNd_Ob13XDtue3YZSmuOh3DfXrAOuY_JDwwctkrDQpIU3681cWPfGhSRnsY28fxrkP_hfiM5jVhkAwaV8649Waaz7EhvA8x9B4XWfO_JSQIVzcH7_EOIPBo2DGnzVTRqjz?purpose=fullsize",
            intro: "Training can help dogs understand everyday routines and communicate more comfortably with the people around them. A patient approach, clear cues and positive reinforcement can make learning a rewarding experience.",
            content: `
                <h2>1. Start with a Positive Approach</h2>
                <p>Positive reinforcement means rewarding a behaviour you want to encourage. Rewards may include small suitable treats, praise or a favourite toy. Choose rewards your dog enjoys and use them consistently.</p>

                <figure>
                    <img src="https://images.openai.com/static-rsc-4/0ub7-cX0f9WW75DultM0gLWCkTGiWPFL-ItbbugRrNIPficpyaVrm39nntt44Mz80Ku8GN-eAD1iilBdLUvXOxGXyh4i4SdG1YZ-bBs2EzTRRRoG3pIk-Az8dFlK-0M_bZUGQpnjwmLdIuYNLCSTQowoQZtsiy4lPfFcbYAVPv4xaXIXmuGk8SiR54DwVkn_?purpose=fullsize" alt="Dogs spending time together outdoors">
                    <figcaption>Make learning a positive experience for your dog.</figcaption>
                </figure>

                <h2>2. Practise Simple Everyday Cues</h2>
                <p>Start with simple cues in a quiet environment. Keep practice sessions short and repeat them regularly. Avoid overwhelming your dog with too many new tasks at once.</p>

                <div class="article-image-pair">
                    <figure>
                        <img src="https://images.openai.com/static-rsc-4/Rlsk3qC1ptF47rBOVNmWb2Uy4033R2r8wKvxcsI4C4E-vHxLjnqq6Ik-c8It-5ePJby3-QooE8gq5-mN6afgDWIoi2kWC54BI7GWhK5Dfm3KVUuW5NT7787A-Nqa2QQtkv6QzkFy6tZOno_Tm0oWFRH63KGSifcmJhxdVjbrIBW6hItWfyQKRMmN63HyPA0T?purpose=fullsize" alt="Friendly dog">
                        <figcaption>Build familiarity with simple cues.</figcaption>
                    </figure>
                    <figure>
                        <img src="https://images.openai.com/static-rsc-4/XJDnyiG-6tQ2MHJJPkxu_L_RfQKgHmKuTY9zUSJiFiI5jiAADjalhNfyEw94yOSuqnTFcGW9hkk5jYpYUHS5QvOLNHuQKpptKl02nsi1Z7_h65AJyNyNBui353iYGLyXfOssjzyHQj-aNiYYWkU0Sve4GadAcKxcQ8WuOhHOPjwFIWAcVk3ma12XzZnn70Md?purpose=fullsize" alt="Dog enjoying an activity">
                        <figcaption>Reward calm and appropriate behaviour.</figcaption>
                    </figure>
                </div>

                <h3>Useful beginner cues</h3>
                <ul>
                    <li><strong>Name response:</strong> Reward your dog for looking towards you when called.</li>
                    <li><strong>Sit:</strong> Introduce a consistent verbal cue and reward the response.</li>
                    <li><strong>Come:</strong> Practise recall in a safe, controlled environment.</li>
                    <li><strong>Wait:</strong> Encourage brief pauses during everyday routines.</li>
                </ul>

                <h2>3. Keep Training Consistent</h2>
                <p>Use the same cues and expectations among family members. Consistency makes it easier for your dog to understand what is being requested.</p>

                <h2>4. Support Social Experiences Carefully</h2>
                <p>Introduce new environments, people and other animals at a pace that suits your dog. Respect signs of discomfort and seek guidance from a qualified trainer if you need help with socialisation.</p>

                <figure>
                    <img src="https://images.openai.com/static-rsc-4/3s3Ua_W_jXAd-h88HPy7jTDoa3b4b_CtB6DSYSpHnY2kI9l4RPkRFGti9blOZlhMmt2eppTS1UfYr2pSvjsZZCq1wO-a3GmOZSUr0FMsXzVE3mBPGZitHJCWtAzmpSXCXwuxE62DXvRNFX2lwmFmIQaoU1OceB4o8B_q03qoAuDkdQUgRrzL5cBHRckN8KSJ?purpose=fullsize" alt="Dog receiving gentle care">
                    <figcaption>Calm and supportive experiences help build confidence.</figcaption>
                </figure>

                <h2>5. Avoid Harsh Training Methods</h2>
                <p>Use reward-based methods and avoid frightening or physically punishing your dog. If a behaviour is difficult to manage, ask a qualified positive-reinforcement trainer or veterinarian for support.</p>

                <div class="article-tip-box">
                    <i class="fa-solid fa-lightbulb"></i>
                    <div>
                        <h3>PetShoppy Tip</h3>
                        <p>Celebrate small improvements. Progress can take time, and every dog learns at an individual pace.</p>
                    </div>
                </div>

                <h2>Conclusion</h2>
                <p>Training is an ongoing process built on patience, consistency and trust. Make learning enjoyable and seek professional support when you need a personalised plan.</p>
            `
        },


        "cat-health": {
            category: "CATS · HEALTH",
            title: "Everyday Health and Wellness for Cats",
            subtitle: "Understand routine care, comfortable surroundings, preventive veterinary visits and changes worth noticing.",
            readTime: "6 min read",
            date: "Cat Wellness Guide",
            tags: "Cat Health, Wellness, Veterinary Care",
            hero: "https://images.openai.com/static-rsc-4/wwr30vteA7-WF_IxK2PQZKK4nLHaAVHzq5pwbbcxJpwFXKMDN5RmaOWN3tFCJwZCvOzp1cnIWSX68yhvFkvXEKfsdhLT-aleVgvEBvf6n72b3UUrO3WXmXanXQeFPGZ9EdhPSKgDB8HUeDriZ4gq8hvb18dZDB_qYl7cWEs4KKF-Ke45CnpMG3KTqko8lfjL?purpose=fullsize",
            intro: "Supporting your cat's wellbeing involves more than providing food and shelter. Everyday observation, a comfortable home environment and regular veterinary guidance all contribute to responsible cat care.",
            content: `
                <h2>1. Create a Comfortable Home Environment</h2>
                <p>Cats benefit from a calm environment with suitable resting places, clean litter facilities, access to fresh water and opportunities for play. Give your cat a comfortable place where it can rest without disturbance.</p>

                <figure>
                    <img src="https://images.openai.com/static-rsc-4/Bv9GqwIgIPqwO8k4MU_KYKqQZpnht13Qczhn7P-2Iu3_X3jfmL-YuF1FmM_wbv77Tcrch2_aPj56T2i6A73VcVZlozpnfuDpt4JVSgbNUPlZrTzpqFAgr5mn86y-0kesQ_cdTnPoSb-87Z10wYWBbn6HZpbXIvBdwB6UZhumpTU9V-CneKd4Ud6lf5kEXNXn?purpose=fullsize" alt="Cat relaxing indoors">
                    <figcaption>A comfortable environment supports everyday wellbeing.</figcaption>
                </figure>

                <h2>2. Keep Water and Feeding Areas Clean</h2>
                <p>Provide clean drinking water and wash food and water bowls regularly. Follow appropriate feeding guidance and discuss individual dietary needs with your veterinarian.</p>

                <div class="article-image-pair">
                    <figure>
                        <img src="https://images.openai.com/static-rsc-4/qFNzeERn994Pf-eEDwgIwLYxobGsTpJ-4mSVizR1DjCzWsBBqFSAyFp8Et52EzvZRA8TvxrVArSWKIVy-j8i8Td-fSp6WzhRidZwr6XWVpb_tzVNTF6FTCjT8KfnznO0kKU3SuPXtsIGPm76bc_CJiVii0RUhdCHoQFxcl9Tn-kIX-_m7BR1mxsfIqxvpWpq?purpose=fullsize" alt="Cat food">
                        <figcaption>Choose suitable food for your cat.</figcaption>
                    </figure>
                    <figure>
                        <img src="https://images.openai.com/static-rsc-4/AJnhN8Esq2EW9dMjmgRSC5y0xSSS_jYRPJaulBas3UI8KqKkWjpf1sDvb_1nJsTXpaZvTTNud5rtPYYXGLv98c9PtQ52EY4jUykzyDZe1JTgGNyVPSRG-CNQr1a42e1ybX_qJhWUxB8srd0LUTASWhs_GYnbcBjD4yf0W1r_hAXUQ6EhqaX35nIDxoGvP72W?purpose=fullsize" alt="Cat at home">
                        <figcaption>Provide a calm and clean space.</figcaption>
                    </figure>
                </div>

                <h2>3. Schedule Regular Veterinary Check-ups</h2>
                <p>Veterinary visits help you discuss preventive care, vaccination schedules, parasite prevention, dental care and any changes you have noticed. Your veterinarian can recommend a care schedule suitable for your cat.</p>

                <h2>4. Pay Attention to Behaviour Changes</h2>
                <p>You know your cat's normal routines better than anyone. Notice changes in eating, drinking, litter habits, movement, grooming or social behaviour. If a change concerns you, contact your veterinarian rather than trying to diagnose it yourself.</p>

                <figure>
                    <img src="https://images.openai.com/static-rsc-4/z-JjlNyPRAcIV8vkrnc0QqGTyQE7i-umGEGGLnskvHjQhFTjRqxEIHXpB1b75nJrq7XsGI6Js-FzeLVKVFB-n_uXpD1USxU37IwYlawpiduGBQkey2vBz33Qk0b6boF79ZvxccQEkBFwVDawjKHuGDF6Si2E7eGsfx6f8BHSKrhfL4onENiZN9XtZfgXurc3?purpose=fullsize" alt="Cat resting in a comfortable place">
                    <figcaption>Regular observation helps you understand your cat's normal habits.</figcaption>
                </figure>

                <h2>5. Provide Daily Enrichment</h2>
                <p>Interactive toys, scratching surfaces, suitable climbing spaces and gentle play can provide mental and physical enrichment. Rotate toys occasionally to maintain interest.</p>

                <div class="article-tip-box">
                    <i class="fa-solid fa-lightbulb"></i>
                    <div>
                        <h3>PetShoppy Tip</h3>
                        <p>Keep a note of any unusual changes in your cat's routine so you can explain them clearly during a veterinary visit.</p>
                    </div>
                </div>

                <h2>Conclusion</h2>
                <p>Good cat care combines a comfortable home, clean surroundings, enrichment and regular professional veterinary guidance.</p>
            `
        },


        "small-pet-home": {
            category: "SMALL PETS · ACCESSORIES",
            title: "Creating a Comfortable Home for Small Pets",
            subtitle: "Explore habitat planning, suitable accessories, enrichment and everyday care considerations for small companion animals.",
            readTime: "6 min read",
            date: "Small Pet Care Guide",
            tags: "Small Pets, Habitat, Accessories, Enrichment",
            hero: "https://images.openai.com/static-rsc-4/yrCWr-VuBoP-vs9xD6ccgvfYMZ1yfLCJ6Mm8H5SebwPKcGhbdJJdBJuAZX_rL65LlHhKzmZrDkgunr6zPr4SQBbo15ZsJwJxci1syPachbY_muOuA2APaj4gNf49gD64DK_mUevmG5W8mK76EUp5aDPC_CDCXl0Vjy0M_8M_2QnUWZQi27-CySCgVYqi2Vk6?purpose=fullsize",
            intro: "Small companion animals have different housing, food and enrichment requirements. Before choosing accessories or setting up a habitat, learn about the specific needs of the animal you care for.",
            content: `
                <h2>1. Understand Your Pet's Species</h2>
                <p>Rabbits, guinea pigs, hamsters and other small companion animals do not all have the same care requirements. Research the needs of your particular pet and seek guidance from a veterinarian experienced with that species.</p>

                <figure>
                    <img src="https://images.openai.com/static-rsc-4/75EgftzOYJ4WTfD33YX4y3Z4Fy50I1-QLnvQON8PHg4dQ1G6E3C7Kjv1gbVAP7HcgpHAte4KhB70M8_yOaEjuBdumQ2n5rvvqR4x94Bcp0BbWSFwOnWcOMTg1HoV_E--4NGCqHmlf7nT8d_sp63NlDR_z0GFThQg-oaWpZdXTBfIbBWdmmcbCit_LiHdZcuM?purpose=fullsize" alt="Small companion animal">
                    <figcaption>Choose a habitat designed for your pet's species.</figcaption>
                </figure>

                <h2>2. Plan a Suitable Habitat</h2>
                <p>Consider the available space, ventilation, safe flooring, resting areas and cleaning needs. The enclosure should provide enough room for normal movement and species-appropriate activities.</p>

                <div class="article-image-pair">
                    <figure>
                        <img src="https://images.openai.com/static-rsc-4/-3Y72yn-3vTZrifT2zM7s0SU0yiVwMN1e2qx4ltuAfMnRcGBf04ssj9rcEbqDn6TaZY_e7wotnWvZ6Jj5qEmMq-WVxc9AFELU3pdjrJ4D_YHyYTOTKevfTU9YuyX4rwZuEnyKlHoV2faQb05flBjPywpjeSA_dbcWr60QeGqFKaOfn0PudIShQ2Bkq017guV?purpose=fullsize" alt="Rabbit resting">
                        <figcaption>Provide a suitable resting area.</figcaption>
                    </figure>
                    <figure>
                        <img src="https://images.openai.com/static-rsc-4/w8cSYJrzO4h81WP7e4VQd1sepil1GNeaZBxFRRLJQ6Ve9t9gDHlFAzUcBczjeKXj04uHLsyfmTLJqtIgKrzIAtmIgE1mZHMy3AsQtA7ToRwa49FV0SNU9XnGl6MX6rNbk4SEYIYQpGWP0yaB700qJlhDOrFJjCs_IU4a55eT810wrjsNnN3hE7tcxsmduUsI?purpose=fullsize" alt="Small pet">
                        <figcaption>Choose safe, suitable habitat accessories.</figcaption>
                    </figure>
                </div>

                <h2>3. Select Appropriate Accessories</h2>
                <ul>
                    <li>Species-appropriate food and water containers.</li>
                    <li>Suitable bedding or habitat flooring.</li>
                    <li>Safe hiding and resting spaces.</li>
                    <li>Enrichment toys and activity items designed for that animal.</li>
                    <li>Cleaning supplies suitable for the habitat.</li>
                </ul>

                <h2>4. Keep the Habitat Clean</h2>
                <p>Follow a regular cleaning routine suited to the species and enclosure. Remove soiled material as needed, clean food and water containers and use products that are safe for the animal.</p>

                <h2>5. Provide Species-Appropriate Enrichment</h2>
                <p>Different animals need different forms of stimulation. Ask a knowledgeable veterinarian or animal-care professional which toys, hiding spaces and activities are suitable for your pet.</p>

                <div class="article-tip-box">
                    <i class="fa-solid fa-lightbulb"></i>
                    <div>
                        <h3>PetShoppy Tip</h3>
                        <p>Always check product size, materials and suitability for your pet's species before purchasing habitat accessories.</p>
                    </div>
                </div>

                <h2>Conclusion</h2>
                <p>A comfortable habitat starts with understanding the animal's individual needs. Choose suitable accessories and maintain a clean, safe environment.</p>
            `
        },


        "dog-accessories": {
            category: "DOGS · ACCESSORIES",
            title: "A Practical Guide to Choosing Dog Accessories",
            subtitle: "Explore collars, harnesses, leashes, toys and grooming essentials for your dog's everyday routine.",
            readTime: "7 min read",
            date: "Dog Accessories Guide",
            tags: "Dog Accessories, Collars, Leashes, Toys",
            hero: "https://images.openai.com/static-rsc-4/WraYGghfNF694g_gu5APW9XbhfLeaEpZECtyhb4Liv0ApDABAcFSNXmrlnvwicKN_QkXrvfS-lGrrGZRzNpW7cCZYdDmJzELtf09uYXBAnoJJpb9-SS8HBgzxdOcnNFh6ZrYHDTjVVYpHWkHMSvuFAuIjtfdz7aYbVofUlbaDElaNHVveabLt_bx_EvhX96v?purpose=fullsize",
            intro: "Dog accessories can support walking, grooming, play and everyday comfort. The right choice depends on your dog's size, needs, behaviour and the intended use of each product.",
            content: `
                <h2>1. Choose a Suitable Collar</h2>
                <p>Look for a collar that fits comfortably and can be adjusted correctly. Check the manufacturer's sizing instructions and inspect the fit regularly, especially as puppies grow.</p>

                <figure>
                    <img src="https://images.openai.com/static-rsc-4/Z5VXHSUuwpI4b9LrnAq_xbonqK8BmuUii1q8BFbHx5GJS0PqXLavtUSRKb9r4KPP2-uTPAO_IN2Fr2MWxyvzzSBa39Ei36GSin0AO7mwGo53UfeL935KgxyBHfcBXSPHaRwedofRkUDuBxn2iRCfcY_VepW_le6gYXgU39bXFB_NQ6YxDvHFIGroaxzS-vqO?purpose=fullsize" alt="Dog enjoying outdoor time">
                    <figcaption>Comfort and correct fit should guide accessory selection.</figcaption>
                </figure>

                <h2>2. Compare Harnesses and Leashes</h2>
                <p>Harnesses and leashes come in different styles and materials. Consider your dog's body shape, comfort, walking habits and the manufacturer's fitting instructions.</p>

                <div class="article-image-pair">
                    <figure>
                        <img src="https://images.openai.com/static-rsc-4/c2XtGeZkRnQZILHQMfA2e3_sskTBTNx6f715W37Wg3uYYlm7Jv9T4xl-dRhwb1I37YsAkZiD4wfN9S0SiDOwXKlQnLB4Dt6UALtFdaa4p6PdDh4Vy9da9kSOurjO2tAkxWqbowoy-GaGYOB4X3iwAOBnOqs6bTqSa_5_AMF1s7OgOBIbIEpN0biGooWemMn6?purpose=fullsize" alt="Dog enjoying a walk">
                        <figcaption>Choose walking accessories that fit properly.</figcaption>
                    </figure>
                    <figure>
                        <img src="https://images.openai.com/static-rsc-4/M-rGE056NNbjZdmpiN_Ss60miCfmsySVGKwiv2OvFxDzMpp_vV7_mErbnFDADZywdwwNoS9_lUWvd5kJ-oQb8qgY6Jzx_Vq0dYGFsJERrMLIp1w45_ubMT59Knjw__LH-CwQGG5X2hVIjF01ftR9dUbL2Sqkiq6ivI8bG6BBarSoayy-LnQcn6RyGE-HDBQI?purpose=fullsize" alt="Dog portrait">
                        <figcaption>Check materials and construction quality.</figcaption>
                    </figure>
                </div>

                <h2>3. Select Appropriate Toys</h2>
                <p>Choose toys based on your dog's size, play style and chewing habits. Inspect toys regularly and remove damaged items. Supervise play when needed, especially with new toys.</p>

                <h2>4. Build a Grooming Kit</h2>
                <p>A basic grooming kit may include a suitable brush, comb, pet-specific shampoo and other tools recommended for your dog's coat. Different coat types require different care.</p>

                <figure>
                    <img src="https://images.openai.com/static-rsc-4/4FJmnr3ER0hXA8_Pvq1TMBQM1SF4J1kjhaup5udliVdbt7ijLpQLCrCH6yA2hSfYJnLC8ID1A-PSCu4W2F4-2rN4o975iBKQvwa0Ujj0heipdCoFdBGp3pZXl_Rhh3hSPpqGsULUM1C4o-EGZBnnhBlMohms4stQFlNlqdCWCqOT6nLqkVmugVNq_787TGje?purpose=fullsize" alt="Dog grooming">
                    <figcaption>Choose grooming tools that match your dog's coat type.</figcaption>
                </figure>

                <h2>5. Consider Product Safety</h2>
                <ul>
                    <li>Check the recommended pet size and weight range.</li>
                    <li>Read the material and care instructions.</li>
                    <li>Inspect stitching, clasps and connecting parts.</li>
                    <li>Replace damaged or worn accessories.</li>
                    <li>Choose products intended for pets.</li>
                </ul>

                <div class="article-tip-box">
                    <i class="fa-solid fa-lightbulb"></i>
                    <div>
                        <h3>PetShoppy Tip</h3>
                        <p>Measure your dog before ordering collars or harnesses. Never rely only on a general breed-size label.</p>
                    </div>
                </div>

                <h2>Conclusion</h2>
                <p>Good accessories should be suitable, comfortable and well maintained. Compare product details and choose items that fit your dog's everyday needs.</p>
            `
        },


        "cat-toys": {
            category: "CATS · ACCESSORIES",
            title: "Choosing Toys That Keep Indoor Cats Engaged",
            subtitle: "Discover interactive toys, scratching posts and enrichment ideas for a more interesting indoor environment.",
            readTime: "6 min read",
            date: "Cat Enrichment Guide",
            tags: "Cat Toys, Indoor Cats, Enrichment, Accessories",
            hero: "https://images.openai.com/static-rsc-4/t13UvKZL5v1QbIaEbnHiZ27xsF3Jj06TYi-GQbb3PJ2yWGaHsQ5hVM1r5yB0YGIhfiFO74KHuSZ_k5_ikdaBZXBoa9muDQYudRkGx8X1r9IGO0v1t6HJrsKog28dc7VOHzLQ3umdgFttozI03YT6eWv2THeWwHHu_6EcY3K2jaUP7Oa7R50P-XoqCG4Ymria?purpose=fullsize",
            intro: "Indoor cats benefit from opportunities to explore, play, scratch and interact with their surroundings. Suitable toys and enrichment accessories can make everyday routines more interesting.",
            content: `
                <h2>1. Explore Different Types of Cat Toys</h2>
                <p>Cats can enjoy different styles of play. Some prefer moving toys, while others show interest in puzzle feeders, soft toys or interactive activities. Observe what your cat enjoys.</p>

                <figure>
                    <img src="https://images.openai.com/static-rsc-4/uLPGKpOXIqnKjl4-156yF8F-iCfEFsJK8em8kF0SSa0RanqfbtzL9Zax1KTAI1xVRsBcC3C5PLInXMaMLmYnL-osjZVUNKBR4-_paJiiZpUCYTIpCMaklKnIIE-gfYeUqbmZSkI3l_Fohxk_QA4TMw-vGgoKSTCxI5MxHwHHH9gYRh3GaV8a3jgj9ljtdVE6?purpose=fullsize" alt="Cat playing">
                    <figcaption>Choose toys that suit your cat's play preferences.</figcaption>
                </figure>

                <h2>2. Add Scratching Opportunities</h2>
                <p>Scratching is a normal feline behaviour. Provide appropriate scratching posts or boards and place them in areas your cat can easily access.</p>

                <div class="article-image-pair">
                    <figure>
                        <img src="https://images.openai.com/static-rsc-4/N0iFD4HHXBOSPCYPwgZPwCasFZ9obCT69RIUSXIV12sHwsfbboimriQ2A_LZ_1Bg86D_l7PYnRj9ynY-eHiYyByuaCbRnB3ytXcqR3guT1ZV6dkWyHJgZfu9QHPNHfN5ToRHtOsIO4Xrq5PZnQftUuFNeoGrXK50VuUk9PF0ii6-6x3AkArujb2BOWGloVPC?purpose=fullsize" alt="Cat resting indoors">
                        <figcaption>Create comfortable spaces for rest.</figcaption>
                    </figure>
                    <figure>
                        <img src="https://images.openai.com/static-rsc-4/ySk08w4Va85NABmXPdIPMnYfbC4VKdBxthW5LMQGlKkn_EC4arQsTts5TYBiOkwxMBM3527oJ686K3WiaW8x0uLTvz-K2dS13ObkUpENn6tRE0Z7uqTTZAqQ-k_VC_XvUieOxUEmZVSrmin-U7RprWsYe-66yvTkkXAJCDrcEDmIzTClISHTKce2E9Zlrj6h?purpose=fullsize" alt="Cat portrait">
                        <figcaption>Offer different forms of enrichment.</figcaption>
                    </figure>
                </div>

                <h2>3. Try Interactive Play</h2>
                <p>Interactive play gives you an opportunity to spend time with your cat. Use suitable toys and allow your cat to engage at a comfortable pace. Store toys safely after play when appropriate.</p>

                <h2>4. Introduce Puzzle Activities</h2>
                <p>Some cats enjoy food puzzles and enrichment feeders. Select products designed for cats and follow the product instructions. Make sure the activity is suitable for your cat's age and abilities.</p>

                <h2>5. Inspect Toys Regularly</h2>
                <ul>
                    <li>Check toys for loose or damaged parts.</li>
                    <li>Choose products made for cats.</li>
                    <li>Avoid toys with small detachable parts that may be swallowed.</li>
                    <li>Supervise play with string or wand-style toys.</li>
                    <li>Replace damaged toys.</li>
                </ul>

                <div class="article-tip-box">
                    <i class="fa-solid fa-lightbulb"></i>
                    <div>
                        <h3>PetShoppy Tip</h3>
                        <p>Rotate a few suitable toys instead of leaving every toy out all the time. Notice which activities your cat enjoys most.</p>
                    </div>
                </div>

                <h2>Conclusion</h2>
                <p>Thoughtful play and enrichment can make an indoor cat's environment more engaging. Select safe toys and give your cat opportunities to explore at its own pace.</p>
            `
        },


        "summer-care": {
            category: "DOGS & CATS · SEASONAL CARE",
            title: "Summer Care Tips for Dogs and Cats",
            subtitle: "Practical ideas for hydration, comfortable resting spaces, grooming and warm-weather routines.",
            readTime: "7 min read",
            date: "Seasonal Pet Care",
            tags: "Summer Care, Hydration, Dogs, Cats",
            hero: "https://images.openai.com/static-rsc-4/BR2ElTyPcWx74F26r7nZT4wcbrC_h6WHqrtNxjrR-5kl0UTgP5hynsEOduWiyxl_Qr5zV98gfn9TxwN-GOulTPqephiWPx5BRaNoUfQRGp_AWd-1TcFZpSokDOBASdmt2tLmjYVFwzLR_4QvJW48-UadLn_yHzFfGZFDKn7GmU9t_E57p7QTY9172m15T7Ld?purpose=fullsize",
            intro: "Warmer weather can change your pet's daily routine. Simple planning can help you provide comfortable resting spaces, access to fresh water and suitable activity times.",
            content: `
                <h2>1. Keep Fresh Drinking Water Available</h2>
                <p>Make clean drinking water available throughout the day. Keep water bowls in accessible places and refresh the water regularly. If you travel with your pet, plan suitable water breaks.</p>

                <figure>
                    <img src="https://images.openai.com/static-rsc-4/n9KbfB4ByCm7mZBTeUscDZUg6-ZnQeynyxenQsjbxXAJXpigatQV-oynHWtNuMt_DswG0pKi5yTxvgcpSAKGB1Lkq9pLcXCIHFHPVD3hqfmMMI1UbPhS30BKNymgwOuMYyZYliZ3MsvMWkCwQp9o8wLM7Hf6xoP3Szwt7rmejC-VNQ53nlTvYSuQ2S3mshuX?purpose=fullsize" alt="Dog outdoors">
                    <figcaption>Make water easy for your pet to access.</figcaption>
                </figure>

                <h2>2. Create a Comfortable Resting Space</h2>
                <p>Provide a shaded, well-ventilated resting area away from direct sunlight. Never leave a pet unattended in a parked vehicle, even for a short period.</p>

                <div class="article-image-pair">
                    <figure>
                        <img src="https://images.openai.com/static-rsc-4/TVlXeZ5mZHB5g0nLiN577pa1zGf5RW6S9Wn9A8ONQ9HrR603xxwvsM79EfXRB3LESywxvY4brWuJfgYSDL6IEgqacdju4yks7keOz8Mx00z5HKpO9xzMmQxZ1S_v_lT6VGLuGaARW5RWCQVEPA4_HBoYLP2qFTxYQrIobpQbUUTygeAVSyBBgjFVXYUvpyvd?purpose=fullsize" alt="Cat resting">
                        <figcaption>Provide a calm indoor resting area.</figcaption>
                    </figure>
                    <figure>
                        <img src="https://images.openai.com/static-rsc-4/9jU290Z-Y1DcRJUxPmXdVEATh95-M9uX33qWyjdYPNcnA_GPKr-a_55p4U1CmUrNVq2q1JpBgKYAzrgivt5CVaajx2_a--K2ojxWEKWjh0bUiqfSuCINaXcpRIZXMTD4XWtAfZdLBB14rjB4T44kRL__71GauDyhOJ1DsEPF1KFrMsyu0Oxf5nR_-UErDvSP?purpose=fullsize" alt="Dog and cat">
                        <figcaption>Make comfort available to every pet.</figcaption>
                    </figure>
                </div>

                <h2>3. Plan Outdoor Activities Thoughtfully</h2>
                <p>Choose cooler parts of the day for outdoor activities. Consider the ground surface before walking your dog and avoid forcing exercise in uncomfortable weather.</p>

                <h2>4. Maintain a Suitable Grooming Routine</h2>
                <p>Brush your pet according to its coat type and keep grooming tools clean. Do not shave a pet's coat without professional advice, as coat care needs vary between animals.</p>

                <h2>5. Know When to Seek Veterinary Help</h2>
                <p>Unusual heavy panting, weakness, vomiting, confusion or collapse can indicate a serious heat-related problem. Contact a veterinarian or emergency veterinary service immediately if you are concerned. Do not delay professional care.</p>

                <div class="article-tip-box">
                    <i class="fa-solid fa-lightbulb"></i>
                    <div>
                        <h3>PetShoppy Tip</h3>
                        <p>Prepare a small outing kit with water, a suitable travel bowl, waste bags and your pet's essential items.</p>
                    </div>
                </div>

                <h2>Conclusion</h2>
                <p>Comfortable spaces, fresh water and sensible activity planning can support your pet during warmer weather. Contact a veterinarian whenever you have concerns about your pet's wellbeing.</p>
            `
        },


        "seasonal-care": {
            category: "DOGS & CATS · SEASONAL CARE",
            title: "A Seasonal Pet Care Guide for Every Home",
            subtitle: "Prepare for changing weather, monsoon routines, festive celebrations and comfortable everyday care.",
            readTime: "8 min read",
            date: "Seasonal Pet Care Guide",
            tags: "Seasonal Care, Monsoon, Festivals, Pet Wellness",
            hero: "https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&w=1400&q=85",
            intro: "Different seasons bring changes to household routines and outdoor activities. A little preparation can help you keep your pet comfortable while maintaining familiar care habits.",
            content: `
                <h2>1. Warm-Weather Care</h2>
                <p>During warmer periods, provide access to fresh water and comfortable resting spaces. Plan outdoor activities carefully and avoid leaving pets in parked vehicles.</p>

                <figure>
                    <img src="https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?auto=format&fit=crop&w=1100&q=85" alt="Dog outdoors">
                    <figcaption>Plan comfortable routines during warmer weather.</figcaption>
                </figure>

                <h2>2. Monsoon Grooming and Hygiene</h2>
                <p>Rainy weather may mean muddy paws and damp coats. Keep a clean towel near the entrance, dry your pet when needed and maintain clean resting areas. Ask your veterinarian about suitable parasite prevention for your location.</p>

                <div class="article-image-pair">
                    <figure>
                        <img src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=85" alt="Dog being cared for">
                        <figcaption>Keep your pet clean and comfortable.</figcaption>
                    </figure>
                    <figure>
                        <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=85" alt="Cat at home">
                        <figcaption>Maintain clean, dry resting areas.</figcaption>
                    </figure>
                </div>

                <h2>3. Festive Season Awareness</h2>
                <p>Celebrations may involve visitors, unfamiliar decorations and loud sounds. Prepare a quiet, comfortable space where your pet can rest. Keep decorations and unsuitable foods out of reach.</p>

                <h2>4. Travel and Holiday Planning</h2>
                <p>If you plan to travel, arrange suitable pet care in advance. Check transport requirements, pack familiar essentials and choose a responsible caregiver or suitable boarding facility if needed.</p>

                <h2>5. Refresh Your Pet's Essentials</h2>
                <ul>
                    <li>Check collars, harnesses and leashes for wear.</li>
                    <li>Keep grooming supplies clean and suitable.</li>
                    <li>Check food packaging and expiry dates.</li>
                    <li>Replace damaged toys and accessories.</li>
                    <li>Keep veterinary contact details accessible.</li>
                </ul>

                <div class="article-tip-box">
                    <i class="fa-solid fa-lightbulb"></i>
                    <div>
                        <h3>PetShoppy Tip</h3>
                        <p>Make a seasonal checklist for your pet so that food, grooming, travel and comfort essentials are ready when you need them.</p>
                    </div>
                </div>

                <h2>Conclusion</h2>
                <p>Seasonal care is about adapting your routine while keeping your pet's individual needs in mind. When in doubt, ask your veterinarian for advice suited to your pet and local conditions.</p>
            `
        }

    };


    // =========================================
    // LOAD THE SELECTED ARTICLE
    // =========================================

    const params = new URLSearchParams(window.location.search);
    const articleId = params.get("article") || "dog-nutrition";
    const article = articles[articleId] || articles["dog-nutrition"];

    document.title = article.title + " | PetShoppy";

    document.getElementById("articleCategory").textContent = article.category;
    document.getElementById("articleTitle").textContent = article.title;
    document.getElementById("articleSubtitle").textContent = article.subtitle;
    document.getElementById("articleReadTime").textContent = article.readTime;
    document.getElementById("articleDate").textContent = article.date;
    document.getElementById("articleTags").textContent = article.tags;
    document.getElementById("articleIntroduction").innerHTML =
        "<p>" + article.intro + "</p>";

    document.getElementById("articleContent").innerHTML = article.content;

    document.getElementById("breadcrumbTitle").textContent = article.title;

    const heroImage = document.getElementById("articleHeroImage");
    heroImage.src = article.hero;
    heroImage.alt = article.title;


    // =========================================
    // SOCIAL SHARING
    // =========================================

    const pageUrl = window.location.href;
    const shareTitle = encodeURIComponent(article.title);
    const shareUrl = encodeURIComponent(pageUrl);

    document.getElementById("whatsappShare").href =
        "https://wa.me/?text=" + shareTitle + "%20" + shareUrl;

    document.getElementById("facebookShare").href =
        "https://www.facebook.com/sharer/sharer.php?u=" + shareUrl;

    const copyButton = document.getElementById("copyArticleLink");
    const copyMessage = document.getElementById("copyMessage");

    copyButton.addEventListener("click", async function () {

        try {
            await navigator.clipboard.writeText(pageUrl);
            copyMessage.textContent = "Article link copied!";
        } catch (error) {
            copyMessage.textContent =
                "Copy is unavailable in this browser. Please copy the page address.";
        }

    });


    // =========================================
    // MOBILE NAVIGATION
    // =========================================

    const mobileMenuBtn = document.getElementById("mobileMenuBtn");
    const mainNav = document.getElementById("mainNav");

    if (mobileMenuBtn && mainNav) {

        mobileMenuBtn.addEventListener("click", function () {

            mainNav.classList.toggle("show");

            const icon = mobileMenuBtn.querySelector("i");

            if (icon) {
                icon.classList.toggle("fa-bars");
                icon.classList.toggle("fa-xmark");
            }
        });

        mainNav.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", function () {

                mainNav.classList.remove("show");

                const icon = mobileMenuBtn.querySelector("i");

                if (icon) {
                    icon.classList.add("fa-bars");
                    icon.classList.remove("fa-xmark");
                }
            });

        });
    }


    // =========================================
    // DARK MODE
    // =========================================

    const themeBtn = document.getElementById("themeBtn");

    function updateThemeIcon() {

        if (!themeBtn) return;

        const icon = themeBtn.querySelector("i");

        if (!icon) return;

        icon.className = document.body.classList.contains("dark")
            ? "fa-solid fa-sun"
            : "fa-solid fa-moon";
    }

    const savedTheme = localStorage.getItem("petshoppy-theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark");
    }

    updateThemeIcon();

    if (themeBtn) {

        themeBtn.addEventListener("click", function () {

            document.body.classList.toggle("dark");

            const theme = document.body.classList.contains("dark")
                ? "dark"
                : "light";

            localStorage.setItem("petshoppy-theme", theme);

            updateThemeIcon();
        });
    }


    // =========================================
    // RTL / LTR
    // =========================================

    const directionBtn = document.getElementById("directionBtn");

    const savedDirection =
        localStorage.getItem("petshoppy-direction");

    if (savedDirection === "rtl" || savedDirection === "ltr") {
        document.documentElement.setAttribute("dir", savedDirection);
    }

    if (directionBtn) {

        directionBtn.addEventListener("click", function () {

            const currentDirection =
                document.documentElement.getAttribute("dir") || "ltr";

            const newDirection =
                currentDirection === "ltr" ? "rtl" : "ltr";

            document.documentElement.setAttribute("dir", newDirection);

            localStorage.setItem("petshoppy-direction", newDirection);
        });
    }

});
