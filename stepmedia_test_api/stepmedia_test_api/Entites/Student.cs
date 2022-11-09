namespace stepmedia_test_api.Entites
{
    public class Student: BaseEntity<Guid>
    {
        public string? FullName { get; set; }
        public DateTime? Dob { get; set; }
    }
}
