using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace contoso.Models
{
    public class Test
    {
        public int TestID { get; set; }
        public string TestTitle { get; set; }
        public int Percent { get; set; }

        [JsonIgnore]
        public virtual ICollection<Course> Course { get; set; }
    }
}