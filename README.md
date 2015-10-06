# lag-console-test

This is a demo site for the  `alon:lag-console` meteor package.

The package adds lag to method calls and publication to simulate real-world response times on your development machine.

This way, you can test the user experience without polluting your code with calls to `Meteor._delayForMs()`.

You can control and configure the lag via Constellation.

Use <kbd>Ctrl</kbd>+<kbd>C</kbd> to toggle the Constellation console.

See it live at http://delay.meteor.com.

To try it locally:
```sh
git clone https://github.com/MasterAM/meteor-lag-console-demo.git
cd meteor-lag-console-demo
meteor --settings config/settings.json
```

![Preview](https://cloud.githubusercontent.com/assets/226666/10304438/d5b760e2-6c22-11e5-8576-85bb0c87ed86.png)

## alon:lag-console

A plugin for `constellation:console` that provides a UI controls for `alon:lag-methods` and `alon:lag-publications`.

### Installation

```sh
meteor add alon:lag-console
```

### For more information

- Atmosphere: https://atmospherejs.com/alon/lag-console
- github: https://github.com/MasterAM/meteor-lag-console
