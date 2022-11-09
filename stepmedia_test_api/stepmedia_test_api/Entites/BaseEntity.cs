using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace stepmedia_test_api.Entites
{
    public abstract class BaseEntity<TKey>
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Required]
        public virtual TKey? Id { get; set; }
    }
}
