---
description: "A floating indicator above players who own an Udon product."
sidebar_custom_props:
    customIcon: 👑
---

# Floating Overhead Buy Indicator

import SellerNotification from '/docs/economy/_sellers-notification.mdx';

<SellerNotification/>

1. Open [the Example Central Window](https://vrc-beta-docs.netlify.app/sdk/example-central) from the window from the Unity Editor Menu under "VRChat SDK > 🏠 Example Central"
2. If you haven't yet specifically made examples visible yet:
	1. Press the ⚙️ gear icon in the Example Central window to open Example Central settings.
    2. Enable "Show Creator Economy Examples".
3. Find this prefab in the list or search for it by title (same as the title of this page).
4. Press the "Import" button to import the Unitypackage into your project.

Floating Overhead Buy Indicator is a prefab that spawns an indicator over a player's head once they have purchased something. Customize it in various ways to highlight your supporters.

![FloatingPrefab](/img/economy/examples/BuyIndicator-FloatingPrefab.png "Shows what a Floating Obj looks like over a players head.")

import HowToImportExample from '/docs/economy/_ce-how-to-import.mdx';

<HowToImportExample/>

##### Prefabs Included
* **FloatingOverheadBuyIndicatorPrefab**: A script that adds the `FloatingObjectPrefab` above players who own the `ExampleProduct`.

* **FloatingObjectPrefab**: What's spawned above the player when they own the product. You can customize this or replace it with another GameObject to be anything you'd like.

:::caution
If viewing the example scene, you'll also need the [Open Group Page](/economy/sdk/examples/open-group-page) prefab. Otherwise, your project will be missing what it needs for a complete scene.
:::

### How to Use

For this (and most!) prefabs, you'll first need an UdonProduct to check for and a way for players to purchase this product. 

Once you've created a purchasable product:

1. Drag the **FloatingOverheadBuyIndicatorPrefab** into your scene. It's invisible by default as there's no image or model to display yet.

![FloatingPrefabtoScene](/img/economy/examples/BuyIndicator-FloatingPrefabtoScene.png "Dragging the prefab into scene.")

2. In the Inspector, locate the **Product** variable. Click on the circle button and replace the example file with your own product.

![ProductAdd](/img/economy/examples/BuyIndicator-ProductAdd.png "Dragging the prefab into scene.")

3. Next, locate **Overhead Indicator Prefab**. This is what will spawn over the players head when they purchase this product. Think of it like the green diamond from the Sims! You can replace this with whatever GameObject you'd like, but just make sure it has no colliders.

![ObjAdd](/img/economy/examples/BuyIndicator-ObjAdd.png "Adding a custom GameObject.")

4. Use **Height Above Head** to customize how far above the player's head you want the indicator to float.

![HeightChange](/img/economy/examples/BuyIndicator-HeightChange.png "Adjusting height.")

5. If you'd like the player to be able to look up and see their own indicator, leave **Show Indicator Above Local Player** enabled. Disable it if otherwise.

<div class="video-container">
    <iframe src="https://assets.vrchat.com/videos/docs/BuyIndicator-ShowIndicatorAboveLocalPlayer.mp4" title="Overhead Indicator" frameborder="0" allow="encrypted-media; gyroscope; web-share" allowfullscreen></iframe>
</div>

6. Run Build & Test!

### Inspector Parameters

* `UdonProduct` - The Udon Product that when owned adds a floating object above a player.
* `Overhead Indicator Prefab `- The indicator GameObject that you want to float above players head. Make sure this object doesn't have any colliders or you'll likely run into issues.
* `HeightAboveHead` - How far above the player's head you want the indicator to float.
* `Show Indicator Above Local Player` - Whether or not you should see an indicator above yourself if you own the product.
