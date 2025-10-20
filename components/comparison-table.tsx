import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const products = [
  {
    model: "Nebula Capsule II",
    brightness: "200 ANSI",
    battery: "2.5h",
    os: "Android TV",
    link: "#",
  },
  {
    model: "Kodak Luma 350",
    brightness: "150 ANSI",
    battery: "2h",
    os: "Android",
    link: "#",
  },
  {
    model: "ViewSonic M1+",
    brightness: "300 ANSI",
    battery: "3h",
    os: "Linux",
    link: "#",
  },
]

export function ComparisonTable() {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center gradient-text">Compare Models</h2>

        <div className="overflow-x-auto">
          <div className="gradient-border">
            <div className="gradient-border-inner">
              <Table>
                <TableHeader>
                  <TableRow className="border-border hover:bg-muted/50">
                    <TableHead className="text-primary font-bold">Model</TableHead>
                    <TableHead className="text-primary font-bold">Brightness</TableHead>
                    <TableHead className="text-primary font-bold">Battery</TableHead>
                    <TableHead className="text-primary font-bold">OS</TableHead>
                    
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {products.map((product, index) => (
                    <TableRow key={index} className="border-border hover:bg-muted/50">
                      <TableCell className="font-semibold text-foreground">{product.model}</TableCell>
                      <TableCell className="text-muted-foreground">{product.brightness}</TableCell>
                      <TableCell className="text-muted-foreground">{product.battery}</TableCell>
                      <TableCell className="text-muted-foreground">{product.os}</TableCell>
                      
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>

        <p className="text-sm text-muted-foreground text-center mt-8">
          🛒 As an Amazon Associate, we earn from qualifying purchases.
        </p>
      </div>
    </section>
  )
}
