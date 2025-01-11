import Packages from "./Packages";


const InFlightOffers = () => {

const packages = [
    {
        id: 1,
        title: "Economy",
        price: 225,
        perks: [
            "2 hours of design support",
            "1-month expiry",
            "Billed at a rate of $45 per hour",
        ],
        popularity: "none",
    }, {
        id: 2,
        title: "Premium",
        price: 439,
        perks: [
            "5 hours of design support",
            "1-month expiry",
            "Billed at a rate of $44 per hour",
        ],
        popularity: "none",
    },
    {
        id: 3,
        title: "Business",
        price: 999,
        perks: [
            "10 hours of design support",
            "1-month expiry",
            "Billed at a rate of $43 per hour",
        ],
        popularity: "popular",
    },
    {
        id: 4,
        title: "First Class",
        price: 1999,
        perks: [
            "50 hours of design support",
            "2-month expiry",
            "Billed at a rate of $40 per hour",
        ],
        popularity: "none",
    },
];
  return (
      <section className='container mx-auto'>
          <p className="section-title">IN-FLIGHT OFFERS</p>
          <h2 className='text-primary pb-10'>Ticket Packages</h2>
          <div>
              <ul className="grid grid-cols-4 gap-10 px-14">
                  {packages.map((ticketPackage) => ( 
                      <Packages key={ticketPackage.id} packages={ticketPackage}/>
                  ))
                  }
              </ul>
          </div>

    </section>
  )
}

export default InFlightOffers