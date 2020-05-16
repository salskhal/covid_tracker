import React from "react"
import styles from "./What.module.css"

const What = () => {
    return(
        <div> 
            <div className={styles.container}>
            <div class="card mt-2 shadow mt-4">
                <div class="card-body text-center">
                    <blockquote class="blockquote mb-0">
                    <h1>Coronavirus disease 2019 (COVID-19). What is it really?</h1>
                <footer class="blockquote-footer">Learn about Corona virus and what to do to protect yourself</footer>
                    </blockquote>
                </div>
            </div>
            <div className="content mt-4">
                <h3 className="mt-4">What is covid-19?</h3>
                <p>COVID-19 is a disease caused by a new strain of coronavirus. ‘CO’ stands for corona, ‘VI’ for virus, and ‘D’ for disease. Formerly, this disease was referred to as ‘2019 novel coronavirus’ or ‘2019-nCoV.’The COVID-19 virus is a new virus linked to the same family of viruses as Severe Acute Respiratory Syndrome (SARS) and some types of common cold.</p>

            <div className="embed-responsive embed-responsive-16by9 mt-4">
            <   iframe title="WHO COVID-19" className="embed-responsive-item" src="https://www.youtube.com/embed/OZcRD9fV7jo?rel=0" alt="WHO COVID-19"></iframe>
            </div>

                <h3 className="mt-5">Symptoms of COVID-19</h3><hr/>
                <p>Symptoms can include fever, cough andshortness of breath. In more severe cases, infection can cause pneumonia or breathing difficulties. More rarely, the disease can be fatal.These symptoms are similar to the flu (influenza) or the common cold, which are a lot more common than COVID-19. This is why testing is required to confirm if someone has COVID-19. It’s important to remember that key prevention measures are the same – frequent hand washing, and respiratory hygiene (cover your cough or sneeze with a flexed elbow or tissue, then throw away the tissue into a closed bin). Also, there is a vaccine for the flu – so remember to keep yourself and your child up to date with vaccinations. </p>

                <h3 className="mt-5">How does COVID-19 spread</h3><hr/>
                <p>The virus is transmitted through direct contact with respiratory droplets of an infected person (generated through coughing and sneezing). Individuals can also be infected fromand touching surfaces contaminated with the virusand touching their face (e.g., eyes, nose, mouth). The COVID-19 virus may survive on surfaces for several hours, but simple disinfectants can kill it.</p>

                <h3 className="mt-5">Who is more at risk?</h3><hr/>
                <p>We arelearningmore about how COVID-19 affects peopleevery day.  Older people, and people with chronic medical conditions, such as diabetes and heart disease, appear to be more at risk of developing severe symptoms.  As this is a new virus, we are still learning abouthow it affects children. We know it is possible for people of any age to be infected with thevirus, but so far there arerelatively few cases of COVID-19 reported among children. This is a new virus and we need to learn more about how it affects children. The virus can be fatal in rare cases, so far mainly among older people with pre-existing medical conditions.</p>

                <h3 className="mt-5">What is the treatment for COVID-19</h3><hr/>
                <p>There is nocurrently availablevaccineforCOVID-19. However, many of the symptoms can be treatedandgetting early care from a healthcare provider can make the disease less dangerous.There are several clinical trials that are being conducted to evaluate potential therapeutics for COVID-19.</p>

                <h3 className="mt-5">How can the spread of COVID-19 be slowed down or prevented?</h3><hr/>
                <p>As withother respiratory infectionslike the flu or the common cold, public health measuresare critical to slow the spread of illnesses. Public health measures are everyday preventive actionsthat include:</p>

            </div>
            </div>
        </div>
    )
}

export default What