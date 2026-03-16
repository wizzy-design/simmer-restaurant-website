"use client";
import { motion } from "motion/react";
import { fadeUp } from "../../lib/animations";

const RulesScreen = () => {
  return (
    <div className="bg-onyx-black min-h-screen pt-40 pb-24 text-[#C4C8C9]">
      <section className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          {...fadeUp}
          className="text-center mb-16 md:mb-24 flex flex-col items-center"
        >
          <h1 className="text-5xl md:text-6xl font-kaushan italic text-white leading-[1.1] mb-4">
            House{" "}
            <span className="text-gold not-italic font-sans font-light tracking-tight">
              Rules
            </span>
          </h1>
          <p className="mt-6 text-lg max-w-2xl font-light font-sans text-white/90 leading-relaxed text-center">
            To ensure a wonderful and sophisticated dining experience for all
            our guests, we kindly ask that you observe the following guidelines
            during your visit to Simmer Restaurant.
          </p>
          <div className="w-16 h-px bg-gold/50 mt-10"></div>
        </motion.div>

        {/* Rules Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto mb-32">
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="flex flex-col gap-6 bg-white/5 p-8 rounded-md border border-white/5 hover:border-gold/30 transition-colors"
          >
            <h3 className="text-2xl text-gold font-sans font-medium tracking-wide flex items-center gap-4">
              <span className="text-white/20 text-4xl font-light">1</span>{" "}
              Reservations
            </h3>
            <ul className="flex flex-col gap-4 text-base font-light font-sans text-white/80 leading-relaxed">
              <li>
                <strong className="text-white font-medium">
                  Reservation Policy:
                </strong>{" "}
                Reservations are encouraged, especially during peak hours.
                Walk-ins are welcome and subject to availability.
              </li>
              <li>
                <strong className="text-white font-medium">Timeliness:</strong>{" "}
                Please arrive on time for your reservation. We allow a grace
                period of 15 minutes before the table may be given to other
                guests.
              </li>
            </ul>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
            className="flex flex-col gap-6 bg-white/5 p-8 rounded-md border border-white/5 hover:border-gold/30 transition-colors"
          >
            <h3 className="text-2xl text-gold font-sans font-medium tracking-wide flex items-center gap-4">
              <span className="text-white/20 text-4xl font-light">2</span> Dress
              Code
            </h3>
            <ul className="flex flex-col gap-4 text-base font-light font-sans text-white/80 leading-relaxed">
              <li>
                <strong className="text-white font-medium">
                  Smart Casual Attire:
                </strong>{" "}
                Simmer maintains a smart-casual dress code. Please dress like
                respectable individuals.
              </li>
            </ul>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.3 }}
            className="flex flex-col gap-6 bg-white/5 p-8 rounded-md border border-white/5 hover:border-gold/30 transition-colors"
          >
            <h3 className="text-2xl text-gold font-sans font-medium tracking-wide flex items-center gap-4">
              <span className="text-white/20 text-4xl font-light">3</span>{" "}
              Behaviour & Conduct
            </h3>
            <ul className="flex flex-col gap-4 text-base font-light font-sans text-white/80 leading-relaxed">
              <li>
                <strong className="text-white font-medium">
                  Respect for Others:
                </strong>{" "}
                Guests are expected to behave respectfully towards other diners,
                staff, and the property. Disruptive or inappropriate behaviour
                will not be tolerated.
              </li>
              <li>
                <strong className="text-white font-medium">
                  Mobile Phones:
                </strong>{" "}
                Please keep mobile phone conversations at a low volume or step
                outside to avoid disturbing other guests.
              </li>
            </ul>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.4 }}
            className="flex flex-col gap-6 bg-white/5 p-8 rounded-md border border-white/5 hover:border-gold/30 transition-colors"
          >
            <h3 className="text-2xl text-gold font-sans font-medium tracking-wide flex items-center gap-4">
              <span className="text-white/20 text-4xl font-light">4</span> Food
              & Drinks
            </h3>
            <ul className="flex flex-col gap-4 text-base font-light font-sans text-white/80 leading-relaxed">
              <li>
                <strong className="text-white font-medium">
                  No Outside Food or Drink:
                </strong>{" "}
                Outside food and beverages are not permitted unless prior
                arrangements are made for special dietary needs (e.g.,
                allergies, birthday cakes).
              </li>
              <li>
                <strong className="text-white font-medium">
                  Allergies and Dietary Restrictions:
                </strong>{" "}
                Please notify the staff of any allergies or dietary restrictions
                in advance so that appropriate measures can be taken.
              </li>
            </ul>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="flex flex-col gap-6 bg-white/5 p-8 rounded-md border border-white/5 hover:border-gold/30 transition-colors"
          >
            <h3 className="text-2xl text-gold font-sans font-medium tracking-wide flex items-center gap-4">
              <span className="text-white/20 text-4xl font-light">5</span>{" "}
              Guidelines & Liability
            </h3>
            <ul className="flex flex-col gap-4 text-base font-light font-sans text-white/80 leading-relaxed">
              <li>
                <strong className="text-white font-medium">
                  Health Safety:
                </strong>{" "}
                We prioritize the health and safety of all guests. Please
                respect any current guidelines in place, including wearing masks
                if required, using sanitizers provided, and maintaining social
                distancing as advised by staff.
              </li>
              <li>
                <strong className="text-white font-medium">
                  Feeling Unwell:
                </strong>{" "}
                If you feel unwell, we kindly ask that you reschedule your visit
                to protect others.
              </li>
              <li>
                <strong className="text-white font-medium">
                  Guest Liability:
                </strong>{" "}
                Guests are responsible for any damages caused to the restaurant
                property due to negligence or misuse.
              </li>
            </ul>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
            className="flex flex-col gap-6 bg-white/5 p-8 rounded-md border border-white/5 hover:border-gold/30 transition-colors"
          >
            <h3 className="text-2xl text-gold font-sans font-medium tracking-wide flex items-center gap-4">
              <span className="text-white/20 text-4xl font-light">6</span>{" "}
              Tipping & Payment
            </h3>
            <ul className="flex flex-col gap-4 text-base font-light font-sans text-white/80 leading-relaxed">
              <li>
                <strong className="text-white font-medium">
                  Tipping Policy:
                </strong>{" "}
                Tipping is at the guest&apos;s discretion but is appreciated.
                Service charges may be automatically added for larger parties.
              </li>
              <li>
                <strong className="text-white font-medium">
                  Payment Options:
                </strong>{" "}
                We accept debit cards, transfers and cash. We kindly ask that
                payments are settled in full at the end of your meal.
              </li>
              <li>
                <strong className="text-white font-medium">
                  Group Payments:
                </strong>{" "}
                For group dining, we prefer one bill per table, though we can
                accommodate splitting the bill if requested in advance only.
              </li>
            </ul>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.3 }}
            className="flex flex-col gap-6 bg-white/5 p-8 rounded-md border border-white/5 hover:border-gold/30 transition-colors"
          >
            <h3 className="text-2xl text-gold font-sans font-medium tracking-wide flex items-center gap-4">
              <span className="text-white/20 text-4xl font-light">7</span>{" "}
              Groups & Events
            </h3>
            <ul className="flex flex-col gap-4 text-base font-light font-sans text-white/80 leading-relaxed">
              <li>
                <strong className="text-white font-medium">
                  Large Group Policy:
                </strong>{" "}
                For groups of 6 or more, we recommend booking in advance.
                Pre-set menus or deposits may be required for large parties or
                special events.
              </li>
              <li>
                <strong className="text-white font-medium">
                  Private Events:
                </strong>{" "}
                Any special requests for private events or large group bookings
                should be communicated to the management at least one week in
                advance.
              </li>
            </ul>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.4 }}
            className="flex flex-col gap-6 bg-white/5 p-8 rounded-md border border-white/5 hover:border-gold/30 transition-colors"
          >
            <h3 className="text-2xl text-gold font-sans font-medium tracking-wide flex items-center gap-4">
              <span className="text-white/20 text-4xl font-light">8</span>{" "}
              Photography & Social Media
            </h3>
            <ul className="flex flex-col gap-4 text-base font-light font-sans text-white/80 leading-relaxed">
              <li>
                <strong className="text-white font-medium">
                  Photos and Social Media:
                </strong>{" "}
                Guests are welcome to take photos of their dining experience
                with their phones, but we ask that it does not interfere with
                other guests&apos; experience. Flash photography should be
                minimized.
              </li>
              <li>
                <strong className="text-white font-medium">Photoshoots:</strong>{" "}
                All photoshoot sessions at the restaurant are to be paid for.
                Using any device other than your mobile phone, such as
                professional cameras, ring lights or spot lights, tripods etc
                will be charged.
              </li>
            </ul>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="flex flex-col gap-6 bg-white/5 p-8 rounded-md border border-white/5 hover:border-gold/30 transition-colors md:col-span-2"
          >
            <h3 className="text-2xl text-gold font-sans font-medium tracking-wide flex items-center gap-4">
              <span className="text-white/20 text-4xl font-light">9</span>{" "}
              Children & Other Policies
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-base font-light font-sans text-white/80 leading-relaxed">
              <div className="flex flex-col gap-4">
                <p>
                  <strong className="text-white font-medium">Children:</strong>{" "}
                  Simmer Restaurant enforces an adults-only policy, requesting
                  that children under 12 not be brought to the restaurant. There
                  are no high chairs, booster seats, or children&apos;s menus,
                  as the environment is intended to remain quiet and
                  sophisticated. Exceptions may be made for private events in
                  separate areas, with prior arrangements required with
                  management. Guests&apos; cooperation is appreciated to ensure
                  an enjoyable dining experience for all. If children are
                  brought to the restaurant, they must be under close
                  supervision at all times to avoid disturbing other guests.
                </p>
                <p>
                  <strong className="text-white font-medium">
                    Pets Policy:
                  </strong>{" "}
                  Pets are not allowed inside the restaurant or its premises.
                </p>
                <p>
                  <strong className="text-white font-medium">
                    Restroom Usage:
                  </strong>{" "}
                  Please use the restrooms respectfully and notify staff if
                  supplies are running low or any issues arise.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p>
                  <strong className="text-white font-medium">
                    Wi-Fi Policy:
                  </strong>{" "}
                  Simmer Restaurant provides complimentary Wi-Fi for guests.
                  Please use it responsibly by avoiding high-bandwidth
                  activities like streaming and large downloads. Accessing
                  illegal or offensive content is prohibited. Wi-Fi usage may be
                  limited during peak hours to ensure availability, and extended
                  access can be requested from staff. Guests are responsible for
                  their device&apos;s security, as the restaurant is not liable
                  for any issues. Additionally, avoid activities that could
                  disturb other guests, such as loud video or audio playback.
                </p>
                <p>
                  <strong className="text-white font-medium">
                    No Smoking Indoors:
                  </strong>{" "}
                  Smoking is not allowed inside the restaurant. Designated
                  smoking areas are available outside.
                </p>
                <p>
                  <strong className="text-white font-medium">
                    Feedback Encouraged:
                  </strong>{" "}
                  We value your feedback and suggestions. Feel free to leave a
                  review or speak with management about your experience.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Buffet Terms and Conditions */}
      <section className="container mx-auto px-4 md:px-8 pt-16 border-t border-white/10">
        <motion.div
          {...fadeUp}
          className="text-center mb-16 flex flex-col items-center"
        >
          <h2 className="text-4xl md:text-5xl font-kaushan italic text-white leading-[1.1] mb-4">
            Buffet{" "}
            <span className="text-gold not-italic font-sans font-light tracking-tight">
              Terms & Conditions
            </span>
          </h2>
          <div className="w-16 h-px bg-gold/50 mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-7xl mx-auto">
          {/* Buffet Video */}
          <motion.div
            {...fadeUp}
            className="lg:col-span-6 relative aspect-video md:aspect-4/3 w-full rounded-md overflow-hidden shadow-2xl border border-white/5 bg-white/5"
          >
            <video
              src="https://res.cloudinary.com/dvjslohdt/video/upload/simmer-restaurant/buffet.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent pointer-events-none" />
          </motion.div>

          {/* Terms List */}
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
            className="lg:col-span-6 flex flex-col gap-4 text-base font-light font-sans text-white/80 leading-relaxed bg-white/5 p-8 lg:p-10 rounded-md border border-white/5"
          >
            <ul className="space-y-4">
              <li>
                <strong className="text-gold font-medium">
                  All-You-Can-Eat:
                </strong>{" "}
                Unlimited servings must be consumed on-the premises.
              </li>
              <li>
                <strong className="text-gold font-medium">No Takeaways:</strong>{" "}
                Leftovers cannot be packed or taken away. If necessary, they
                will incur a separate charge.
              </li>
              <li>
                <strong className="text-gold font-medium">Time Limit:</strong>{" "}
                Guests have a set time for dining. Once done, please give way
                for other dinners. (2hrs)
              </li>
              <li>
                <strong className="text-gold font-medium">No Sharing:</strong>{" "}
                Buffet access is for paying guests only. You cannot
                &quot;escort&quot; anybody to the buffet premises.
              </li>
              <li>
                <strong className="text-gold font-medium">Pricing:</strong>{" "}
                Per-person rates apply; children&apos;s rates depend on age or
                height.
              </li>
              <li>
                <strong className="text-gold font-medium">
                  Food Allergies:
                </strong>{" "}
                Guests should inquire about ingredients; the restaurant
                isn&apos;t liable for reactions.
              </li>
              <li>
                <strong className="text-gold font-medium">Wastage:</strong> To
                avoid food waste, you are encouraged to take smaller portions
                and return for seconds, or thirds.
              </li>
              <li>
                <strong className="text-gold font-medium">Beverages:</strong>{" "}
                Any beverage that is not on the buffet menu for the day, will
                attract its menu price.
              </li>
              <li>
                <strong className="text-gold font-medium">Reservations:</strong>{" "}
                Are not compulsory but will be encouraged.
              </li>
              <li>
                <strong className="text-gold font-medium">Behavior:</strong>{" "}
                Guests must maintain decorum; service may be refused for
                violations.
              </li>
              <li>
                <strong className="text-gold font-medium">No Refunds:</strong>{" "}
                Payments are non-refundable once service begins.
              </li>
              <li>
                <strong className="text-gold font-medium">
                  Policy Updates:
                </strong>{" "}
                Terms are subject to change.
              </li>
            </ul>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default RulesScreen;
