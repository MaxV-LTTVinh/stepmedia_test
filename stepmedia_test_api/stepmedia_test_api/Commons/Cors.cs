namespace stepmedia_test_api.Commons
{
    public static class Cors
    {
        public static bool IsAllowedAll(this string[] values)
        {
            return values == null || values.Length == 0 || values.Contains("*");
        }
    }
}
