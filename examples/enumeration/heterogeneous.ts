/*
异构枚举（Heterogeneous enums）
从技术的角度来说，枚举可以混合字符串和数字成员，但是似乎你并不会这么做。
除非你真的想要利用JavaScript运行时的行为，否则我们不建议这样做。
 */

enum BooleanLikeHeterogeneousEnum {
    No = 0,
    Yes = "YES",
}