import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import image53 from "./assets/image53.png";
import Banner2 from './Banner2';

function Heritage() {
  return (

    <div>
    <Container>
       <h2 className="service" style={{ marginBottom: "30px", marginTop: "50px", color:"orange" }}>
            <strong>Our Heritage</strong>
          </h2>
      <Row>
        {/* First Column */}
        <Col xs={12} md={6}>
          {/* Your content for the first column */}
        
          <p>The <strong>Unity SACCO</strong> Society limited was conceived out
of need for a more flexible, tailor-made and inclusive
financial systems to provide solidarity support to
largely underserved last-mile segments of the
society whose sources of income and livelihoods
have been affected by multiple global crises that
have defied conventional Interventions.

Established in 2018 and registered as a non-
Deposit-taking Sacco, we have enabled our

valued members, primarily smallholder producers
drawn from commodity associations, to access
capital, financial products and related services.
This has ultimately helped our members to build
financial assets, promote entrepreneurship, and
start enterprises within the value chain that have
created jobs, and helped restore hope, dignity, build
resilience and transform livelihoods.
As any other institution whose resilience was
tested - and shaken - by the Covid-19 pandemic
exacerbating the climate change-fueled drought
that had plunged agriculture-dependent
population into despair, we endured and rose to
overcome the turmoil triggered by the two crises
that collapsed many organisations.</p>

<p>However, it didn’t escape lessons to us that
ensuring a resiliently sound financial position
during times of both prosperity and instability
is essential in securing financial well-being and
upward socio-economic mobility of people, society
and economies.</p>


<p>The bedrock of our Membership remains
smallholder producers of sorghum, sunflower and
honey, as well as Small Micro enterprises and Small
Internal Lending Communities (SILCs) driven by
these commodities. Conscious that they ought to
live in interdependence nature, adapt and build
resilience to the unpredictably changing climate,
our members actively participate in initiatives that
contribute to national sustainable development
and adaptation plans.</p>
<p>We have worked with <strong>Unity SACCO</strong> about

Forest Community Associations, Water Resources
Associations, youth and women groups to develop
tailor-made products to support their work.
In addition to supporting our members in their
commodity value chain development, we also avail
to them innovative financial models that build
knowledge, skills, and habits through coaching or
counseling to help them define their financial goals,
develop financial plans, and select and use our
financial products designed for their context.</p>
        </Col>

        {/* Second Column */}
        <Col xs={12} md={6}>
          {/* Your content for the second column */}
          
          <img
            src={image53}
            alt="Image Alt Text"
            className="img-fluid"
            style={{ marginTop: "7%", marginBottom: "7%" }}
          />

          <p>
What makes us completely different from
conventional SACCO practices whose focus is saving
and lending, is that we work in solidarity with our
members, first by jointly identifying their needs,
working together to define the niche and walking
the journey towards realizing their dream, translating
it into reality.
We consider ourselves, our members and partners
as risk takers navigating through “unchartered
waters” conventional investors consider no-go zones
- where we work with business people, and persons
in informal employment, investment micro-groups
(SILCs) and start-ups to co-create and incubate ideas
that ultimately evolve into transformative initiatives.</p>
        </Col>
      </Row>
    </Container>
<div>
<Banner2/>
</div>
    

    </div>

  );
}

export default Heritage;
