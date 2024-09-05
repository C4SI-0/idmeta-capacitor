// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "IdmetaCapacitor",
    platforms: [.iOS(.v13)],
    products: [
        .library(
            name: "IdmetaCapacitor",
            targets: ["IdMetaCapacitorPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", branch: "main")
    ],
    targets: [
        .target(
            name: "IdMetaCapacitorPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/IdMetaCapacitorPlugin"),
        .testTarget(
            name: "IdMetaCapacitorPluginTests",
            dependencies: ["IdMetaCapacitorPlugin"],
            path: "ios/Tests/IdMetaCapacitorPluginTests")
    ]
)