<div align="center">

# PS-BUEHLER ASSET MANAGER

![PS-Buehler Logo]![Logo](./docs/logo.png)   

</div>

**Team Members:** Michael Payne, Gideon Buehler, Wyn Roberts, Anthony Constantinescu, Aidan Zacherl

*9/24/26*

---

## Introduction to the Product

This product we are building is an inventory management software built specifically for the needs of PS-Buehler to supply power plants with the correct necessary parts for these plants to maintain operation. The purpose of the system is to replace the usage of Excel to track parts with a web application. The goal is to increase efficiency and centralize information while providing a more user-friendly UI. The target group of this software is PS-Buehler, but more specifically its employees as well as their contractors and the power plants themselves. At the lowest level contractors will be able to scan QR codes and see more detailed information about the part. The contractor will also be able to submit field reports as to the condition of parts as well as the maintenance performed on them. The plant should be able to log in to update the parts in only their plant. Regional managers will only be able to see all the plants in their region and see when the scheduled downtime is for the plant, which is when most normal maintenance will take place. The site will also generate a report for the plant which shows what parts will likely need to be replaced. Admins should be able to add parts, add upgrade packages for parts, see all the scheduled downtime for various plants, and generate reports for each plant to see what needs replaced and maintained.

## Representative Tasks

**Task 1:**

A manager logs in and sees a notification that a power plant's fall outage is 10 months away. The manager opens the plants page and pulls the auto generated parts list, which shows what components need attention. Some assets are flagged, so they click on each component to check its repair status, and whether or not it needs to be replaced. There is an old pump in the list, so they mark it for replacement instead of repairing it. Now they can reach out to the customer and make them aware of the need for replacing the pump and be proactive.

**Task 2:**

An employee searches for a plant and opens its overview page, which shows the plant owner and asset list. The employee selects a turbine to take a closer look and opens its bill of materials to see what components all inside the turbine are. The asset's lifecycle status shows that it is nearing the end of its service window and need maintenance soon. They flag the turbine and adds it to the list of assets to be serviced at the next outage, and anyone assisting with planning the outage can now see the flag.

**Task 3:**

A maintenance coordinator at a plant logs in and sees what PS-Buehler has logged as their plants parts list. They search for a bearing that was recently swapped out and marks it as replaced, along with the new install date. A shipment of spare filter parts also arrived that morning, so they add that to the inventory as well. PS-Buehler can now see the updates that were made, and spreadsheets don't have to be sent back and forth anymore.

## Similar Existing Software

- **Asset Panda**
  - This software allows for mobile ground level operations like our product, which allows contractors and plants to perform actions. This software is unable to separate into regions with separate permissions like our software.

- **Cin7**
  - This company focuses on automating the inventory process and forecasting, which is similar to the goal of our product. This differs because it does not allow for field scanning, and lower-level access for non-admin users.

- **Gearchain**
  - This software is compatible with Excel and has similar scanning functions as our product. It is different because it is meant to be modular so that companies can choose which aspects to keep, and which ones are useful. This company also allows for similar forecasting abilities.

- **InFlow**
  - Similar to our planned product, this software allows for QR and barcode printing and scanning in the field, but it lacks the more long-term tools that our application will have to suggest inventory to purchase.

---

<div align="center">

## Bibliography

</div>

**[1]** "Easy and Flexible Asset Tracking Software," *Asset Panda*. <https://www.assetpanda.com/> (accessed Sept. 24, 2026).

**[2]** "Cin7 | Connected Inventory Management System," *Cin7*. <https://www.cin7.com/> (accessed Sept. 24, 2026).

**[3]** Archon Systems Inc, "Free Inventory Management Software System - inFlow," *Inflowinventory*, 2019. <https://www.inflowinventory.com/> (accessed Sept. 24, 2026).

**[4]** Gearchain, "GearChain | Inventory Software for Google Sheets & Excel," *GearChain*, 2026. <https://gearchain.io> (accessed Sept. 24, 2026).
